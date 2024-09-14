export interface IHeatmapOptions {
  type: 'range' | 'months' | 'month' | 'year';
  value?: number | string | string[];
}

export type HeatmapMode = 'Horizontal' | 'Vertical';
