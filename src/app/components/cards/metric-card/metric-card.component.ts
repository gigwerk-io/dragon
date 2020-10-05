import {AfterViewInit, Component, Input} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.css']
})
export class MetricCardComponent implements AfterViewInit {
  @Input() name: string;
  @Input() percentage: number;
  @Input() total: number | string;
  @Input() labels: Array<any>;
  @Input() datasets: Array<number>;

  constructor() {
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

    const canvas = <HTMLCanvasElement>document.getElementById(this.name);
    const ctx = canvas.getContext('2d');
    // tslint:disable-next-line:no-unused-expression
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: 'rgba(58,194,62,0.24)',
            borderColor: '#3AC23E',
            borderWidth: 2,
            data: this.datasets,
          },
        ],
      },
      options: chartOptions
    });
  }

}
