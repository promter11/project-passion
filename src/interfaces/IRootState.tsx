import { IState } from "./IState";

export interface IRootState {
  [key: string]: IState;
}
