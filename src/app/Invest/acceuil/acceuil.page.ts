import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetsService } from 'src/app/_services/projets.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  projets: any;

  constructor(private projetsService: ProjetsService, private router: Router ) { }

  ngOnInit() {

    this.projetsService.listdesprojets().subscribe(data => {
      this.projets = data;
     // console.log(data);
    })
  }

}
