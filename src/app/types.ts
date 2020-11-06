export enum CardStatus {
  Open,
  Started,
  Done,
  Delivered,
  Closed,
}

export interface Card {
  title: string;
  status: CardStatus;
}

export interface Lane {
  title: string;
  cards: Card[];
}

export interface State {
  lanes: Lane[];
}
