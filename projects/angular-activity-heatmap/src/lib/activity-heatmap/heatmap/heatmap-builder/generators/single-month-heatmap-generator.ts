// single-month-heatmap-generator.ts
import { HeatmapGenerator } from '../heatmap-generator';
import { IDataItem } from '../interfaces/IDataItem';
import { IDayData } from '../interfaces/IDayData';
import { HeatmapMode } from '../interfaces/IHeatmapOptions';
import { IMonthData } from '../interfaces/IMonthData';

export class SingleMonthHeatmapGenerator extends HeatmapGenerator {
  private month: string;

  constructor(data: IDataItem[], mode: HeatmapMode, month: string) {
    super(data, mode);
    this.month = month;
  }

  generateHeatmap(): IMonthData[] {
    const year = this.currentDate.getFullYear();
    const monthIndex = this.getMonthIndex(this.month);

    if (monthIndex === -1) {
      throw new Error(`Invalid month name: ${this.month}`);
    }

    const monthData = this.buildMonthData(year, monthIndex);
    return [
      {
        month: this.month,
        year,
        days: monthData,
      },
    ];
  }

  private buildMonthData(year: number, monthIndex: number): IDayData[] {
    if (this.mode === 'Vertical') {
      return this.buildVerticalMonthData(year, monthIndex);
    } else {
      return this.buildHorizontalMonthData(year, monthIndex);
    }
  }

  private buildVerticalMonthData(year: number, monthIndex: number): IDayData[] {
    return this.buildDaysForMonth(year, monthIndex);
  }

  private buildHorizontalMonthData(year: number, monthIndex: number): IDayData[] {
    return this.buildDaysForMonth(year, monthIndex);
  }

  private buildDaysForMonth(year: number, monthIndex: number): IDayData[] {
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const monthData: IDayData[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, monthIndex, day);
      const count = this.getCountForDate(date);

      monthData.push({
        day,
        dayOfWeek: date.getDay(),
        value: count,
        fullDate: date.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        }),
        date,
      });
    }

    return monthData;
  }
}
