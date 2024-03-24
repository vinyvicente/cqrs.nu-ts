import { Guid } from '../';

export class OpenTab {
  constructor(
    readonly id: Guid,
    readonly tableNumber: number,
    readonly Waiter: string,
  ) {}
}
