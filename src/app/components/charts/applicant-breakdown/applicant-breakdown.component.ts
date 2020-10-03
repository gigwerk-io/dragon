import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
@Component({
  selector: 'app-applicant-breakdown',
  templateUrl: './applicant-breakdown.component.html',
  styleUrls: ['./applicant-breakdown.component.css']
})
export class ApplicantBreakdownComponent implements OnInit, AfterViewInit {

  constructor() { }

  colorPalette = ['#55D9C1', '#02231C', '#C8F6EC', '#4CD7AD', '#107150', '#0778A4'];

  ngOnInit() {
  }


  ngAfterViewInit() {
    const config = {
      type: 'doughnut',
      data: {
        labels: ['Applied', 'Phone Screening', 'Interviewing', 'Onboarding', 'Approved', 'Rejected'],
        datasets: [
          {
            label: 'Payout ($)',
            backgroundColor: this.colorPalette,
            borderColor: this.colorPalette,
            data: [0, 1, 15, 20, 8, 6],
            pointStyle: 'line',
            pointRadius: 15,
            pointColor: ['#36A2EB', '#FF6384', '#FF9F40', '#2C5F2DFF', '#4BC0C0', '#FFA177FF'],
            fill: true
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
          align: 'center',
          position: 'left'
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
                fontColor: 'white',
                callback: function (value) {
                  if (!(value % 10)) {
                  }
                }
              },
              display: true,
              scaleLabel: {
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
    let ctx: any = document.getElementById('pie-chart') as HTMLCanvasElement;
    ctx = ctx.getContext('2d');
    new Chart(ctx, config);
  }


}
