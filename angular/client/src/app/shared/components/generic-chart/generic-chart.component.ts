import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-generic-chart',
  templateUrl: './generic-chart.component.html',
  styleUrls: ['./generic-chart.component.scss'],
})
export class GenericChartComponent implements OnInit {
  @Input() dataset: any = ['11'];
  @Input() labels: any[] = ['11'];
  @Input() chartType: any = 'line';
  @Input() legend = true;

  public lineChartType: ChartType = this.chartType;
  public chartOptions = {
    responsive: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
