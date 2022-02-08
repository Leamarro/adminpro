import { Component, OnInit, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

  @Input() doughnutChartLabels: string[] = [];
  @Input() public doughnutChartData: ChartData<any> = {
    labels: this.doughnutChartLabels,
    datasets: []
  };
  @Input() public doughnutChartType: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
