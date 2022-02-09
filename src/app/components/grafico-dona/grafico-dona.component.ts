import { Component, OnInit, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

 @Input('chartLabels') doughnutChartLabels: string[] = [];
 @Input('chartData') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }
    ]
  };
  @Input('chartType') doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}






// @Input('chartLabels') doughnutChartLabels: string[] = [];
// @Input('chartData') doughnutChartData: ChartData<'doughnut'> = {
//    labels: this.doughnutChartLabels,
//    datasets: [
//      { data: [ 350, 450, 100 ] },
//      { data: [ 50, 150, 120 ] },
//      { data: [ 250, 130, 70 ] }
//    ]
//  };
//  @Input('chartType') doughnutChartType: ChartType = 'doughnut';