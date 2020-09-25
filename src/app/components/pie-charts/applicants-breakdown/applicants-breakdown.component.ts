import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js';


@Component({
  selector: 'app-applicants-breakdown',
  templateUrl: './applicants-breakdown.component.html',
  styleUrls: ['./applicants-breakdown.component.css']
})
export class ApplicantsBreakdownComponent implements OnInit, AfterViewInit {

   // tslint:disable-next-line:no-input-rename
   @Input('labels') labels: Array<string>;
   // tslint:disable-next-line:no-input-rename
   @Input('datasets') datasets;

  constructor() { }

//   Applied

// Phone Screening

// Interviewing

// Onboarding

// Approved

// Rejected

  ngOnInit() {
    console.log('init')
  }

  ngAfterViewInit() {
    const config = {
      type: 'doughnut',
      data: {
        labels: ['Applied', 'Phone Screening', 'Interviewing', 'Onboarding', 'Approved', 'Rejected'],
        datasets: [
          {
            label: 'Payout ($)',
            backgroundColor: ['#36A2EB', '#FF6384', '#FF9F40', '#2C5F2DFF', '#4BC0C0', '#FFA177FF'],
            borderColor: ['#36A2EB', '#FF6384', '#FF9F40', '#2C5F2DFF', '#4BC0C0', '#FFA177FF'],
            data: [3, 1, 15, 20, 8, 6 ],
            pointStyle: 'line',
            pointRadius: 15,
            pointColor: ['#36A2EB', '#FF6384', '#FF9F40', '#2C5F2DFF', '#4BC0C0', '#FFA177FF'],
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
        // scales: {
        //   xAxes: [
        //     {
        //       ticks: {
        //         fontColor: 'rgba(255,255,255,.7)'
        //       },
        //       display: true,
        //       scaleLabel: {
        //         display: false,
        //         labelString: 'Month',
        //         fontColor: 'white'
        //       },
        //       gridLines: {
        //         display: false,
        //         borderDash: [2],
        //         borderDashOffset: [2],
        //         color: 'rgba(33, 37, 41, 0.3)',
        //         zeroLineColor: 'rgba(0, 0, 0, 0)',
        //         zeroLineBorderDash: [2],
        //         zeroLineBorderDashOffset: [2]
        //       }
        //     }
        //   ],
        //   yAxes: [
        //     {
        //       ticks: {
        //         fontColor: 'rgba(255,255,255,.7)',
        //         callback: function(value) {
        //           if (!(value % 10)) {
        //             return '$' + value;
        //           }
        //         }
        //       },
        //       display: true,
        //       scaleLabel: {
        //         display: false,
        //         labelString: 'Payouts',
        //         fontColor: 'white'
        //       },
        //       gridLines: {
        //         borderDash: [3],
        //         borderDashOffset: [3],
        //         drawBorder: false,
        //         color: 'rgba(255, 255, 255, 0.15)',
        //         zeroLineColor: 'rgba(33, 37, 41, 0)',
        //         zeroLineBorderDash: [2],
        //         zeroLineBorderDashOffset: [2]
        //       }
        //     }
        //   ]
        // }
      }
    };
    let ctx: any = document.getElementById('pie-chart') as HTMLCanvasElement;
    ctx = ctx.getContext('2d');
    new Chart(ctx, config);
  }

}
