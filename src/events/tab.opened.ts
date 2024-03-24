import { Guid } from '../';

export class TabOpened {
  constructor(
    readonly id: Guid,
    readonly tableNumber: number,
    readonly Waiter: string,
  ) {}
}
