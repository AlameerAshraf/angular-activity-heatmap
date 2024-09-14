# Angular Heatmap Library

An Angular heatmap component providing a customizable and interactive heatmap visualization for your data.

![Heatmap Example](https://i.ibb.co/t8cs9g5/Screen-Shot-2024-09-14-at-16-45-19-PM.png)


## Features

- **Customizable Heatmap Visualization**: Easily integrate heatmaps into your Angular applications.
- **Flexible Data Types**: Supports generating heatmaps based on a range, specific months, a single month, or an entire year.
- **Layout Modes**: Choose between vertical and horizontal layouts to best fit your application's design.
- **Interactive Tooltips**: Provides tooltips for rich user interaction.
- **Theming and Styling**: Customize the look and feel with themes and CSS classes.
- **Easy Integration**: Simple API and setup process.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Importing the Module](#importing-the-module)
  - [Using the Component](#using-the-component)
  - [Data Format](#data-format)
- [Options](#options)
  - [Heatmap Types](#heatmap-types)
- [Styling and Theming](#styling-and-theming)
- [API Documentation](#api-documentation)
- [Inputs](#inputs)
- [Interfaces](#interfaces)

## Installation

Install the library via npm:

```bash
npm install @alameer/angular-activity-heatmap
```
# Usage
### Importing the Module

In your component's template, use the `activity-heatmap` selector:

```JavaScript
import { ActivityHeatmapModule } from '@alameer/angular-activity-heatmap';

@NgModule({
  imports: [
    // other imports
    ActivityHeatmapModule,
  ],
  // ...
})
export class AppModule {}
```

### Using the Component

In your component's template, use the ```activity-heatmap``` selector:

```HTML
<activity-heatmap
  [mode]="mode"
  [action]="action"
  [theme]="theme"
  [data]="heatmapData"
  [options]="heatmapOptions">
</activity-heatmap>
```

## Data Format

```JavaScript
import { Component } from '@angular/core';
import { DataItem, HeatmapOptions, HeatmapMode } from '@alameer/angular-activity-heatmap';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  heatmapData: DataItem[] = [
    { _id: '2023-01-01', count: 5 },
    { _id: '2023-01-02', count: 3 },
    // ...more data items
  ];

  heatmapOptions: HeatmapOptions = {
    type: 'year', // 'range', 'months', 'month', or 'year'
    // value: ... // Provide value based on the type
  };

  mode: HeatmapMode = 'Horizontal'; // or 'Vertical'
  action = 'Commits'; // Description for the tooltip
  theme = 'fire'; // Theme class prefix fire, deepblue, github
}
```

## Options

### Heatmap Types

- **year**: Generates a heatmap for the entire year.
- **range**: Generates a heatmap for a specified range of months.
- **months**: Generates a heatmap for specific months.
- **month**: Generates a heatmap for a single month.

```JavaScript
heatmapOptions: HeatmapOptions = {
  type: 'year',
};
```

### Styling and Themeing

- **purble**: A purple-themed heatmap with varying shades of purple.
- **fire**: A fiery-themed heatmap with warm red and orange tones.
- **github**: A GitHub-inspired heatmap with shades of green.
- **deepblue**: A cool blue-themed heatmap with deep blue gradients.

### API Documentation

For complete details on how to use and customize this library, refer to the API documentation.

### Inputs

- **data**: The data source for the heatmap visualization.
- **mode**: Determines the layout of the heatmap (e.g., Horizontal or Vertical).
- **action**: Description for the tooltip (e.g., Commits, Events).
- **theme**: Determines the theme for the heatmap (e.g., fire, ocean).

### Interfaces

- **DataItem**: Interface representing the structure of each data point (e.g., _id, count).
- **HeatmapOptions**: Interface for the configuration options (e.g., type, value).
- **HeatmapMode**: Interface for defining the layout mode of the heatmap (e.g., Horizontal or Vertical).
