import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatmapComponent } from './heatmap/heatmap.component';

@NgModule({
  declarations: [
    HeatmapComponent
  ],
  exports: [
    HeatmapComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule
  ]
})
export class ActivityHeatmapModule { }
