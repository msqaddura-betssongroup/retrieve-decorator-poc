import { AccountAppValue, Contracts, ValuesContracts } from './contracts';

export interface GenericObservable<T> {
  next: (value: T) => void;
  complete: () => void;
  error: (error: unknown) => void;
}

type ObservableCreator<T> = (subscriber: GenericObservable<T>) => () => void;

/**
 * Simple Event Bus implementation - Singleton + Publisher/Subscriber pattern
 * public method for dispatching event and listening to it
 * options for replaying events: none, latest, all
 *
 * Buffering:
 * Event bus fills event buffer as handlers are subscribing asynchronously - it is up to handler to decide
 * if dispatched events are needed and upon subscribing to listen can replay them.
 * As soon as Event handler starts listening and potentially replays already dispatched events,
 * buffer for particular command is set to 'nobuffer' and no more events are buffered.
 * In case there is no listener subscription after  for particular commands - we set 'nolistener' and print warning;
 */
export class EventBus<C, VC = {}> {
  private nothing?: C;
  // All subscribers categorized by command name - each holding id for later unsubscribe
  // In case optimization is needed setTimeout can be used to take care of each event subscribers
  constructor() {
    console.log(this.nothing);
  }

  private observables: Record<string, ObservableCreator<unknown>> = {};
  private observableLatestValues: Record<string, unknown> = {};
  private subscribers: Record<string, GenericObservable<unknown>[]> = {};

  expose<Command extends keyof VC & string>(
    key: Command
  ): GenericObservable<VC[Command]> {
    const next = (value: VC[Command]) => {
      this.observableLatestValues[key] = value;
      for (const subscriber of this.subscribers[key] || []) {
        subscriber.next(value);
      }
    };
    const complete = () => {
      delete this.observableLatestValues[key];
      for (const subscriber of this.subscribers[key] || []) {
        subscriber.complete();
      }

      this.subscribers[key] = [];
      delete this.observables[key];
    };
    const error = (error: unknown) => {
      delete this.observableLatestValues[key];
      for (const subscriber of this.subscribers[key] || []) {
        subscriber.error(error);
      }

      this.subscribers[key] = [];
      delete this.observables[key];
    };

    if (!this.observables[key]) {
      this.observables[key] = (subscriber: GenericObservable<VC[Command]>) => {
        this.subscribers[key] = [
          ...(this.subscribers[key] || []),
          subscriber as GenericObservable<unknown>,
        ];
        if (key in this.observableLatestValues) {
          subscriber.next(this.observableLatestValues[key] as VC[Command]);
        }
        return () => {
          this.subscribers[key] = (this.subscribers[key] || []).filter(
            (subscriberToRemove) => subscriberToRemove !== subscriber
          );
        };
      };
    }

    return {
      next,
      complete,
      error,
    };
  }

  retrieve<Command extends keyof VC & string>(
    key: Command
  ): ObservableCreator<VC[Command]> {
    if (!this.observables[key]) {
      this.expose(key);
    }

    return this.observables[key] as ObservableCreator<VC[Command]>;
  }

  destroy() {
    this.observableLatestValues = {};
    this.subscribers = {};
  }
}

export let obgEventBus = new EventBus<Contracts, ValuesContracts>();
let isAuthenticated = false;

setInterval(() => {
  isAuthenticated = !isAuthenticated;
  obgEventBus.expose(AccountAppValue.IsAuthenticated).next(isAuthenticated);
}, 1000);
