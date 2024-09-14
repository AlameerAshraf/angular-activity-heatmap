// range-heatmap-generator.ts

import { HeatmapGenerator } from "../heatmap-generator";
import { IDataItem } from "../interfaces/IDataItem";
import { IDayData } from "../interfaces/IDayData";
import { HeatmapMode } from "../interfaces/IHeatmapOptions";
import { IMonthData } from "../interfaces/IMonthData";

export class RangeHeatmapGenerator extends HeatmapGenerator {
  private range: number;

  constructor(data: IDataItem[], mode: HeatmapMode, range: number) {
    super(data, mode);
    this.range = range;
  }

  generateHeatmap(): IMonthData[] {
    const currentMonthIndex = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    const heatmap: IMonthData[] = [];

    for (let i = 0; i < this.range; i++) {
      let monthIndex = currentMonthIndex - i;
      let year = currentYear;

      if (monthIndex < 0) {
        monthIndex += 12;
        year -= 1;
      }

      const month = this.months[monthIndex];
      const monthData = this.buildMonthData(year, monthIndex);

      heatmap.push({
        month,
        year,
        days: monthData,
      });
    }

    heatmap.reverse();
    return heatmap;
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
