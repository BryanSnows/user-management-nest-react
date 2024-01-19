import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E', 'Category F', 'Category G', 'Category H', 'Category I', 'Category J', 'Category L', 'Category M'];
  barChartType: any = 'bar';
  barChartLegend: boolean = true;

  barChartData: any[] = [
    { data: [65, 59, 30, 40, 80, 90, 10, 20, 44, 50, 30, 80, 50], label: 'Series 1' }
  ];

  private dataUpdateSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.generateRandomData();
    // Atualiza os dados a cada 3 segundos
    this.dataUpdateSubscription = interval(3000).subscribe(() => {
      this.generateRandomData();
    });
  }

  ngOnDestroy(): void {
    if (this.dataUpdateSubscription) {
      this.dataUpdateSubscription.unsubscribe();
    }
  }

  generateRandomData(): void {
    // Gera dados fictícios para o gráfico de barras
    this.barChartData = [
      { data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)], label: 'Series 1' }
    ];
  }
}