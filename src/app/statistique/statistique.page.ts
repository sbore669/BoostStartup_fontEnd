import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
import { ChartType } from 'chart.js/dist/types/index';
import { BaseChartDirective } from 'ng2-charts';
import { AuthService } from '../_services/auth.service';
import { ProjetsService } from '../_services/projets.service';
import { StorageService } from '../_services/storage.service';




@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.page.html',
  styleUrls: ['./statistique.page.scss'],
})
export class StatistiquePage implements OnInit {
  
  currentUser: any;
  sommetotale: any;
  nbreprojets: any;

  constructor(private authService: AuthService,
    private storageService: StorageService,
    private projetsService: ProjetsService,){}
    
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    console.log(this.currentUser)
    this.recupererTotalstartups();
    this.recupererTotalprojetsParstartups();

    
  }
  //
  recupererTotalstartups() {
    const id_users = this.currentUser.id
    this.projetsService.lasommedesprojetsStartups(id_users).subscribe(data => {
      this.sommetotale = data
      console.log(this.sommetotale)
    })
  }

  recupererTotalprojetsParstartups() {
    const id_users = this.currentUser.id
    this.projetsService.nombredeprojetsparStartups(id_users).subscribe(data => {
      this.nbreprojets = data
      console.log(this.nbreprojets)
    })
  } 
  
}











//@ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // public barChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: {
  //     x: {},
  //     y: {
  //       min: 10
  //     }
  //   },
  //   plugins: {
  //     legend: {
  //       display: true,
  //     }
  //   }
  // };
  // public barChartType: ChartType = 'bar';
  // public barChartPlugins = [
    
  // ];

  // public barChartData: ChartData<'bar'> = {
  //   labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  //   datasets: [
  //     { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
  //     { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  //   ]
  // };

  // // events
  // public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  // }

  // public randomize(): void {
  //   // Only Change 3 values
  //   this.barChartData.datasets[0].data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     Math.round(Math.random() * 100),
  //     56,
  //     Math.round(Math.random() * 100),
  //     40 ];

  //   this.chart?.update();
  // }