import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetsService } from '../_services/projets.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-staprojetsdetail',
  templateUrl: './staprojetsdetail.page.html',
  styleUrls: ['./staprojetsdetail.page.scss'],
})
export class StaprojetsdetailPage implements OnInit {

  detailsProjets: any
  nomprojets: any
  action_restante:any
  budgetPrevisonnel: any;
  dateLancement: any;
  description: any;
  donationtotalobtenu: any;
  dureeProjet: any;
  idprojet: any;
  image: any;
  minimun_donation: any;
  nbretotal_action: any;
  objectifpret: any;
  objectif: any;
  pourcentage: any;
  pret_maximun: any;
  pret_minimun: any;
  prix_action: any;
  prettotalobtenu: any;
  soldeprojet: any;
  photo: any;
  nomStartups: any;
  statProjets: any;
  currentUser: any;
  pht: any;
  totalactionvendu: any;
  constructor(private projetsService: ProjetsService, private router: Router,
    private routes: ActivatedRoute,private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.recupererProjetDetails();
    console.log(this.currentUser.id + ' essssssssssssssstttttttttttttttttt');
  }

  recupererProjetDetails() {
    const idprojet = this.routes.snapshot.params['idprojet'];
    console.log(idprojet);
    this.projetsService.recupererProjetsparId(idprojet).subscribe(data => {
    this.detailsProjets = data

      
      console.log(this.detailsProjets);
      this.nomprojets = this.detailsProjets.nomprojets
      this.action_restante = this.detailsProjets.action_restante
      this.budgetPrevisonnel = this.detailsProjets.budgetPrevisonnel
      this.dateLancement = this.detailsProjets.dateLancement
      this.description = this.detailsProjets.description
      this.donationtotalobtenu = this.detailsProjets.donationtotalobtenu
      this.dureeProjet = this.detailsProjets.dureeProjet
      this.idprojet = this.detailsProjets.idprojet
      this.image = this.detailsProjets.image
      this.minimun_donation = this.detailsProjets.minimun_donation
      this.nbretotal_action = this.detailsProjets.nbretotal_action
      this.objectifpret = this.detailsProjets.objectifpret
      this.objectif = this.detailsProjets.objectif
      this.pourcentage = this.detailsProjets.pourcentage
      this.pret_maximun = this.detailsProjets.pret_maximun
      this.pret_minimun = this.detailsProjets.pret_minimun
      this.prettotalobtenu =  this.detailsProjets.prettotalobtenu
      this.prix_action = this.detailsProjets.prix_action
      this.photo = this.detailsProjets.photo
      this.soldeprojet = this.detailsProjets.soldeprojet
      this.nomStartups = this.detailsProjets.startups.nomStartups
      this.statProjets = this.detailsProjets.statProjets
      this.totalactionvendu = this.detailsProjets.actiontotalVendu
      this.pht = this.detailsProjets.startups.photo  
    });
  }

}
