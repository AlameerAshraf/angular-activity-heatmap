import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HeatmapMode, IHeatmapOptions } from './heatmap-builder/interfaces/IHeatmapOptions';
import { IDataItem } from './heatmap-builder/interfaces/IDataItem';
import { IMonthData } from './heatmap-builder/interfaces/IMonthData';
import { generateHeatmap } from './heatmap-builder/factory/heatmap-factory';
import { IDayData } from './heatmap-builder/interfaces/IDayData';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {
  @Input() mode: HeatmapMode = 'Horizontal';
  @Input() activity: string = 'Activity';
  @Input() theme: string = 'fire';
  @Input() data: IDataItem[] = [];
  @Input() options!: IHeatmapOptions;

  heatmapData: IMonthData[] | undefined;

  constructor() { }

  ngOnInit() {
    if (!this.options || !this.options.type) {
      throw new Error('Heatmap options with a valid type must be provided.');
    }
    this.heatmapData = generateHeatmap(this.options, this.data, this.mode);
    console.log(this.heatmapData);
  }

  getTooltipText(day: IDayData): string {
    return `${day.value} ${this.activity} on ${day.fullDate}`;
  }

  getHeatmapColor(value: number): string {
    if (value === 0) {
      return `${this.theme}-level-0`;
    } else if (value > 0 && value <= 5) {
      return `${this.theme}-level-1`;
    } else if (value > 5 && value <= 20) {
      return `${this.theme}-level-2`;
    } else if (value > 20 && value <= 50) {
      return `${this.theme}-level-3`;
    } else if (value > 50) {
      return `${this.theme}-level-4`;
    } else {
      return `${this.theme}-level-0`;
    }
  }
}
