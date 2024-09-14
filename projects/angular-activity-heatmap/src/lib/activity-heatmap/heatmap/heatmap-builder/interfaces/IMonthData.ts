import { IDayData } from "./IDayData";

export interface IMonthData {
  month: string;
  year?: number;
  days: IDayData[];
}
