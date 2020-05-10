import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('labels') labels: Array<string>;
  // tslint:disable-next-line:no-input-rename
  @Input('datasets') datasets;
  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    const config = {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Payout ($)',
            backgroundColor: '#4c51bf',
            borderColor: '#4c51bf',
            data: this.datasets[0].data,
            fill: false
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Sales Charts',
          fontColor: 'white',
        },
        legend: {
          labels: {
            fontColor: 'white'
          },
          align: 'end',
          position: 'bottom'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: 'rgba(255,255,255,.7)'
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Month',
                fontColor: 'white'
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(0, 0, 0, 0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: 'rgba(255,255,255,.7)',
                callback: function(value) {
                  if (!(value % 10)) {
                    return '$' + value;
                  }
                }
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Payouts',
                fontColor: 'white'
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: 'rgba(255, 255, 255, 0.15)',
                zeroLineColor: 'rgba(33, 37, 41, 0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ]
        }
      }
    };
    let ctx: any = document.getElementById('line-chart') as HTMLCanvasElement;
    ctx = ctx.getContext('2d');
    new Chart(ctx, config);
  }

}
