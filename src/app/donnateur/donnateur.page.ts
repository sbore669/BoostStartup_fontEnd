import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from '../_services/donation.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-donnateur',
  templateUrl: './donnateur.page.html',
  styleUrls: ['./donnateur.page.scss'],
})
export class DonnateurPage implements OnInit {
  donateur: any;
  donationtot: any;

  responsive=true
  p:number=1;
  searhText: any

  constructor(private router: Router,
    private routes: ActivatedRoute,private storageService: StorageService,private donationService: DonationService) { }

  ngOnInit() {
    this.recupererdonateurprojets();
  }

  recupererdonateurprojets(){
    const idprojet = this.routes.snapshot.params['idprojet'];
    this.donationService.listerlesdonnateurdunProjet(idprojet).subscribe(data =>{
      this.donateur = data
      for(let text of this.donateur){
        this.donationtot = text.projets.donationtotalobtenu
        console.log('huguiegfuiegfuiegfuiefiuegfieiugfiegfieugfiugeifgirugfiugifug' + text.projets.prettotalobtenu)
      }
      console.log(this.donateur);
    })
  }


}
