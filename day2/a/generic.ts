export enum RoundOutcomeEnum {
  WIN = "WIN",
  LOSE = "LOSE",
  DRAW = "DRAW"
}

export interface IRPC {
  name: string;
  score: number;
  d: IRPCPartial
}

export interface IRPCPartial {
  [key: string]: RoundOutcomeEnum
}
