import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjetsService } from 'src/app/_services/projets.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  projets: any;
  currentUser: any;

  constructor(private projetsService: ProjetsService,
     private router: Router,
     private authService: AuthService,
      private storageService: StorageService, ) { }

  ngOnInit() {
    
    this.currentUser = this.storageService.getUser();
    this.projetsService.listdesprojets().subscribe(data => {
      this.projets = data;
     console.log(data);
    })
  }

}
