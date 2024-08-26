import { AccountAppValue, ValuesContracts } from "./libs/contracts";
import { Retrieve } from "./decorator";
import { Component, ComponentInterface } from "./libs/stencil";

type x = ValuesContracts[AccountAppValue.IsAuthenticated];

@Component
export class Pilot {
  @Retrieve(AccountAppValue.IsAuthenticated) retrieved!: boolean;
  // @Retrieve(AccountAppValue.IsAuthenticated) wrongType!: string;
  // @Retrieve(AccountAppValue.IsAuthenticated) unTyped!;

  constructor(public id: number) {
    setTimeout(() => {
      this.disconnectedCallback();
    }, 5000);
  }

  disconnectedCallback() {
    console.warn("Disconnecting from class");
  }
}
