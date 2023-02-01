import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/_services/action.service';
import { AuthService } from 'src/app/_services/auth.service';
import { DonationService } from 'src/app/_services/donation.service';
import { InvestisseursService } from 'src/app/_services/investisseurs.service';
import { PretService } from 'src/app/_services/pret.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-mesinvestissement',
  templateUrl: './mesinvestissement.page.html',
  styleUrls: ['./mesinvestissement.page.scss'],
})
export class MesinvestissementPage implements OnInit {
  currentUser: any;
  inv: any;
  action: any;
  pret: any;
  don: any;
  tel: any;
  nmcp: any;
  ttinv: any;
  actproj: any;

  constructor(private investisseursService: InvestisseursService,
    private authService: AuthService,
    private storageService: StorageService,
    private pretService: PretService,
    private donationService: DonationService,
    private actionService: ActionService,) { }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.recupererInvestisseurId();
    console.log(this.recupererInvestisseurId)
    this.recupererActionparInvestisseur();
    this.recupererPretparInvestisseur();
    this.recupererDonationparInvestisseur();
  }

  recupererInvestisseurId(){
    const id_users = this.currentUser.id
    console.log(id_users);
    this.investisseursService.listerInvestisseursparId(id_users).subscribe(data =>{
      this.inv = data
      console.log(this.inv)
      this.tel = this.inv.telephone
      this.nmcp = this.inv.nomcomplet
      this.ttinv = this.inv.totalInvestissement
    })
  }
  recupererActionparInvestisseur(){
    const id_users = this.currentUser.id
    console.log(id_users);
    this.actionService.listerActionParInvestisseur(id_users).subscribe(data =>{
      this.action= data
      console.log(this.action)
      this.actproj = this.action.projets
    }) 
  }
  recupererPretparInvestisseur(){
    const id_users = this.currentUser.id
    console.log(id_users);
    this.pretService.listerPretParInvestisseur(id_users).subscribe(data =>{
      this.pret= data
      console.log(this.pret)
    }) 
  }
  recupererDonationparInvestisseur(){
    const id_users = this.currentUser.id
    console.log(id_users);
    this.donationService.listerDonationParInvestisseur(id_users).subscribe(data =>{
      this.don= data
      console.log(this.don)
    }) 
  }
}
