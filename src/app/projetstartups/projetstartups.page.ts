import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetsService } from '../_services/projets.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-projetstartups',
  templateUrl: './projetstartups.page.html',
  styleUrls: ['./projetstartups.page.scss'],
})
export class ProjetstartupsPage implements OnInit {
  currentUser: any;
  vostartups: any;

  constructor(
    private projetsService: ProjetsService,
    private router: Router,
    private routes: ActivatedRoute, 
    private storageService: StorageService,) { }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.recupererProjetStartups();
    console.log(this.currentUser.id + ' venuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu');
  }

  recupererProjetStartups(){
    const id_users = this.currentUser.id
    console.log(id_users);
    this.projetsService.recupererProjetsStartups(id_users).subscribe(data =>{
      this.vostartups = data
      console.log(this.vostartups)
    });
  }

}
