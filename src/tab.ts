import { Guid } from './guid';
import { TabOpened } from './events/tab.opened';
import { TabNotOpened } from './exceptions/tab.not-opened';

export class Tab {
  private constructor(
    readonly aggregateId: Guid,
    readonly records: object[] = [],
    readonly outstandingDrinks: object[] = [],
    readonly outstandingFood: object[] = [],
    readonly preparedFood: object[] = [],
    private opened: boolean = false,
  ) {}

  static open(aggregateId: Guid, tableNumber: number, waiter: string): Tab {
    const tab = new Tab(aggregateId);

    tab.records.push(new TabOpened(aggregateId, tableNumber, waiter));
    tab.markAsOpened();

    return tab;
  }

  private markAsOpened() {
    this.opened = true;
  }
  private isClosed(): boolean {
    return !this.opened;
  }

  order(items: object[]): void {
    if (this.isClosed()) {
      throw new TabNotOpened();
    }

    console.log(items);
  }

  close(): void {
    if (this.isClosed()) {
      throw new TabNotOpened();
    }

    this.opened = false;
  }
}
