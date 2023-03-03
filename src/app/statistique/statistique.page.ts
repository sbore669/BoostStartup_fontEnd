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
  totaldonation: any;
  totalpret: any;
  totalAction: any;

  constructor(private authService: AuthService,
    private storageService: StorageService,
    private projetsService: ProjetsService,){}
    
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    console.log(this.currentUser)
    this.recupererTotalstartups();
    this.recupererTotalprojetsParstartups();
    this.recuperTotalPretStartup();
    this.recuperTotaldesDonationStartup();
    this.recuperTotalActionStartup();
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
  recuperTotaldesDonationStartup(){
    const id_users = this.currentUser.id
    this.projetsService.totaldonnationparStartup(id_users).subscribe(data => {
      this.totaldonation = data
      console.log(this.totaldonation)
    })
  }
  recuperTotalPretStartup(){
    const id_users = this.currentUser.id
    this.projetsService.totalprettotalparStarup(id_users).subscribe(data => {
      this.totalpret = data
      console.log(this.totalpret)
    })
  }
  recuperTotalActionStartup(){
    const id_users = this.currentUser.id
    this.projetsService.totalActionparStarup(id_users).subscribe(data => {
      this.totalAction = data
      console.log(this.totalAction)
    })
  }
@ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 20
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023'],
    datasets: [
      { data: [ 65, 59, 80, 81 ], label: 'Pret',backgroundColor: '#7ED957',borderRadius: 5 },
      { data: [ 28, 48, 40, 29 ], label: 'Action',backgroundColor: '#1C475E',borderRadius: 5  },
      { data: [ 38, 28, 30, 89 ], label: 'Donation',backgroundColor: '#38B6FF',borderRadius: 5  }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }
}