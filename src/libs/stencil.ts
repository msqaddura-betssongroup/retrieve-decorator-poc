export interface ComponentInterface {
  disconnectedCallback?(): void;
}

export function Component<T extends { new (...args: any[]): {} }>(
  baseClass: T,
  context: ClassDecoratorContext
) {
  return class extends baseClass {
    isStencil = true;
    constructor(...args: any[]) {
      super(...args);
    }
  };
}
