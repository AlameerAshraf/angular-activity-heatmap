import { IDataItem } from './interfaces/IDataItem';
import { HeatmapMode } from './interfaces/IHeatmapOptions';
import { IMonthData } from './interfaces/IMonthData';

export abstract class HeatmapGenerator {
  protected currentDate: Date = new Date();
  protected months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ];

  protected data: IDataItem[];
  protected mode: HeatmapMode;

  constructor(data: IDataItem[], mode: HeatmapMode) {
    this.data = data;
    this.mode = mode;
  }

  abstract generateHeatmap(): IMonthData[];

  protected getMonthIndex(month: string): number {
    return this.months.indexOf(month);
  }

  protected getCountForDate(date: Date): number {
    const dateString = date.toISOString().split('T')[0];
    const dataItem = this.data.find(item => item._id === dateString);
    return dataItem ? dataItem.count : 0;
  }
}
