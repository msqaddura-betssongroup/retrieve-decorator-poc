import { AccountAppValue } from './contracts';
import { Retrieve } from './decorator';

export class Manager {
  @Retrieve(AccountAppValue.IsAuthenticated) retrieved!: boolean;
}
