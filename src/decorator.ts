// note that due to the @component decorator we do have access to target. with what the component has

import { ValuesContracts } from "./libs/contracts";
import { obgEventBus } from "./libs/event-bus";
import { Observable, Subscription } from "rxjs";
import { ComponentInterface } from "./libs/stencil";

// https://dev.to/danywalls/using-property-decorators-in-typescript-with-a-real-example-44e

export function Retrieve<Command extends keyof ValuesContracts & string>(
  key: Command
) {
  let subscription: Subscription;
  console.info("~~~~~~~Factory Decorator~~~~", key);
  return function <T, V extends ValuesContracts[Command]>(
    _: T, // in stage 3, target is undefined.
    context: ClassFieldDecoratorContext<T, V>
  ): (initialValue: V) => V {
    console.info("~~~~~~~Decorator Attached~~~~", context);
    context.addInitializer(function () {
      const target = this as T &
        ComponentInterface & { __retrievedProperties$: Subscription };
      if (
        !target.__retrievedProperties$ ||
        target.__retrievedProperties$.closed
      ) {
        target.__retrievedProperties$ = new Subscription();
      }
      console.log(target);

      const originalMethod = target.disconnectedCallback;
      target.disconnectedCallback = function () {
        console.warn("Disconnected from decorator");
        console.log(target);
        target.__retrievedProperties$.unsubscribe();
        if (originalMethod) {
          originalMethod.apply(this);
        }
      };

      target.__retrievedProperties$.add(
        new Observable(obgEventBus.retrieve(key)).subscribe((value) => {
          console.log(`new key value received! ${value}`);
          context.access.set(target, value as V);
        })
      );
    });

    // for typesafety purpose
    return function (initialValue: V) {
      return initialValue;
    };
  };
}

// function withEventBus<T extends { new (...args: any[]): {} }>(baseClass: T) {
//   return class extends baseClass {
//     __retrievedProperties = [];
//     constructor(...args: any[]) {
//       super(...args);
//     }
//   };
// }
