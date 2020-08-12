import { IBanner } from "./IBanner";

export interface IState {
  [key: string]: any;
  info?: IBanner;
  isFetching?: boolean;
}
