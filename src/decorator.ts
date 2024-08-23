// note that due to the @component decorator we do have access to target. with what the component has

import { ValuesContracts } from './contracts';
import { obgEventBus } from './event-bus';
import { Observable } from 'rxjs';
// https://dev.to/danywalls/using-property-decorators-in-typescript-with-a-real-example-44e

export function Retrieve<Command extends keyof ValuesContracts & string>(
  key: Command
) {
  return function <T, V extends ValuesContracts[Command]>(
    _: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    context.addInitializer(function () {
      new Observable(obgEventBus.retrieve(key)).subscribe((value) => {
        context.access.set(this as any, value as any);
      });
    });

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
