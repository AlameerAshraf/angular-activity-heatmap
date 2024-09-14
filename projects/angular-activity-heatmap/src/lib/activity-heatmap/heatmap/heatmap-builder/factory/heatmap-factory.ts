import { RangeHeatmapGenerator } from '../generators/range-heatmap-generator';
import { MonthsHeatmapGenerator } from '../generators/months-heatmap-generator';
import { SingleMonthHeatmapGenerator } from '../generators/single-month-heatmap-generator';
import { YearHeatmapGenerator } from '../generators/year-heatmap-generator';
import { HeatmapMode, IHeatmapOptions } from '../interfaces/IHeatmapOptions';
import { IDataItem } from '../interfaces/IDataItem';
import { IMonthData } from '../interfaces/IMonthData';
import { HeatmapGenerator } from '../heatmap-generator';

export function createHeatmapGenerator(
  options: IHeatmapOptions,
  data: IDataItem[],
  mode: HeatmapMode
): HeatmapGenerator {
  switch (options.type) {
    case 'range':
      if (typeof options.value !== 'number') {
        throw new Error(`Invalid value for type 'range'. Expected a number.`);
      }
      return new RangeHeatmapGenerator(data, mode, options.value);
    case 'months':
      if (!Array.isArray(options.value)) {
        throw new Error(`Invalid value for type 'months'. Expected an array of strings.`);
      }
      return new MonthsHeatmapGenerator(data, mode, options.value as string[]);
    case 'month':
      if (typeof options.value !== 'string') {
        throw new Error(`Invalid value for type 'month'. Expected a string.`);
      }
      return new SingleMonthHeatmapGenerator(data, mode, options.value);
    case 'year':
      return new YearHeatmapGenerator(data, mode);
    default:
      throw new Error(`Invalid heatmap type: ${options.type}`);
  }
}

export function generateHeatmap(
  options: IHeatmapOptions,
  data: IDataItem[],
  mode: HeatmapMode
): IMonthData[] {
  const generator = createHeatmapGenerator(options, data, mode);
  return generator.generateHeatmap();
}
