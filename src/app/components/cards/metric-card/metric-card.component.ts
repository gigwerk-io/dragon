import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.css']
})
export class MetricCardComponent implements OnInit, AfterViewInit  {
  // tslint:disable-next-line:no-input-rename
  @Input('name') name: string;
  // tslint:disable-next-line:no-input-rename
  @Input('percentage') percentage: number;
  // tslint:disable-next-line:no-input-rename
  @Input('total') total: number|string;
  // tslint:disable-next-line:no-input-rename
  @Input('labels') labels: Array<any>;
  // tslint:disable-next-line:no-input-rename
  @Input('datasets') datasets: Array<number>;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const chartOptions = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      elements: {
        point: {
          radius: 0
        },
      },
      scales: {
        xAxes: [{
          gridLines: false,
          scaleLabel: false,
          ticks: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: false,
          scaleLabel: false,
          ticks: {
            display: false,
            suggestedMin: 0,
            suggestedMax: 10
          }
        }]
      }
    };

    const canvas = <HTMLCanvasElement> document.getElementById(this.name);
    const ctx = canvas.getContext('2d');
    // tslint:disable-next-line:no-unused-expression
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: 'rgba(101, 116, 205, 0.1)',
            borderColor: 'rgba(101, 116, 205, 0.8)',
            borderWidth: 2,
            data: this.datasets,
          },
        ],
      },
      options: chartOptions
    });
  }

}
