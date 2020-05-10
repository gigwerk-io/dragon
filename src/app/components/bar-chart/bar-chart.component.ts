import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit, AfterViewInit {
  // tslint:disable-next-line:no-input-rename
  @Input('labels') labels: Array<string>;
  // tslint:disable-next-line:no-input-rename
  @Input('datasets') datasets;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const config = {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Jobs',
            backgroundColor: '#ed64a6',
            borderColor: '#ed64a6',
            data: this.datasets[0].data,
            fill: false,
            barThickness: 8
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        legend: {
          labels: {
            fontColor: 'rgba(0,0,0,.4)'
          },
          align: 'end',
          position: 'bottom'
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
              display: true,
              labelString: 'Month'
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
              display: false,
              labelString: 'Value'
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.2)',
                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ]
        }
      }
    };
    let ctx: any = document.getElementById('bar-chart');
    ctx = ctx.getContext('2d');
    new Chart(ctx, config);
  }

}
