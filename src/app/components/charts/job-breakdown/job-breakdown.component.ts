import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-job-breakdown',
  templateUrl: './job-breakdown.component.html',
  styleUrls: ['./job-breakdown.component.css']
})
export class JobBreakdownComponent implements OnInit, AfterViewInit {
  colorPalette = ['#0486DA', '#8D2F23', '#212026', '#F32F09', '#571D19'];


  constructor() { }


  ngOnInit() {
  }


  ngAfterViewInit() {
    const config = {
      type: 'doughnut',
      data: {
        labels: ['Applied', 'Phone Screening', 'Interviewing', 'Onboarding', 'Approved'],
        datasets: [
          {
            backgroundColor: this.colorPalette,
            borderColor: this.colorPalette,
            data: [30, 1, 15, 20, 8],
            pointStyle: 'line',
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          fontColor: 'white',
        },
        legend: {
          labels: {
            fontColor: 'white'
          },
          align: 'center',
          position: 'top'
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
              display: false,
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
                callback: function (value) {
                  if (!(value % 10)) {
                  }
                }
              },
              display: true,
              scaleLabel: {
                display: false,
                fontColor: 'white'
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: true,
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
    let ctx: any = document.getElementById('jobBreakdownChart') as HTMLCanvasElement;
    ctx = ctx.getContext('2d');
    new Chart(ctx, config);
  }

}
