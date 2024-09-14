import { HeatmapGenerator } from "../heatmap-generator";
import { IDataItem } from "../interfaces/IDataItem";
import { IDayData } from "../interfaces/IDayData";
import { HeatmapMode } from "../interfaces/IHeatmapOptions";
import { IMonthData } from "../interfaces/IMonthData";

export class YearHeatmapGenerator extends HeatmapGenerator {
  constructor(data: IDataItem[], mode: HeatmapMode) {
    super(data, mode);
  }

  generateHeatmap(): IMonthData[] {
    const year = this.currentDate.getFullYear();
    const heatmap: IMonthData[] = [];

    this.months.forEach((month, monthIndex) => {
      const monthData = this.buildMonthData(year, monthIndex);
      heatmap.push({
        month,
        year,
        days: monthData,
      });
    });

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