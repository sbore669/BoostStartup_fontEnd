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

  constructor(
    private projetsService: ProjetsService,
    private router: Router,
    private routes: ActivatedRoute, 
    private storageService: StorageService,) { }

  ngOnInit() {
    
  }

}
