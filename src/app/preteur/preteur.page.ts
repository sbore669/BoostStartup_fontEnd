import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PretService } from '../_services/pret.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-preteur',
  templateUrl: './preteur.page.html',
  styleUrls: ['./preteur.page.scss'],
})
export class PreteurPage implements OnInit {
  preteur: any;
  prettotal: any;
  Prettotal: any;
  constructor(private router: Router,
    private routes: ActivatedRoute,private storageService: StorageService,private pretService: PretService) { }

  ngOnInit() {
    this.recupererPretprojets();
  }

  recupererPretprojets(){
    const idprojet = this.routes.snapshot.params['idprojet'];
    this.pretService.listerlespreteurdunProjet(idprojet).subscribe(data =>{
      this.preteur = data
      for(let text of this.preteur){
        this.Prettotal = text.projets.prettotalobtenu
        console.log('huguiegfuiegfuiegfuiefiuegfieiugfiegfieugfiugeifgirugfiugifug' + text.projets.prettotalobtenu)
      }
      console.log(this.preteur);
    
    })
  }


}
