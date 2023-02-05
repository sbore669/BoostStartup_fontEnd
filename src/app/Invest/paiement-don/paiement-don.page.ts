import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DonationService } from 'src/app/_services/donation.service';
import { ProjetsService } from 'src/app/_services/projets.service';
import { StorageService } from 'src/app/_services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paiement-don',
  templateUrl: './paiement-don.page.html',
  styleUrls: ['./paiement-don.page.scss'],
})
export class PaiementDonPage implements OnInit {
  currentUser: any;
  idprojetSelect: any;
  detailsProjets: any;
  nomprojets: any;
  action_restante: any;
  description: any;
  donationtotalobtenu: any;
  idprojet: any;
  image: any;
  minimun_donation: any;
  nbretotal_action: any;
  objectifpret: any;
  objectif: any;
  pourcentage: any;
  pret_maximun: any;
  pret_minimun: any;
  prettotalobtenu: any;
  prix_action: any;
  nomStartups: any;
  montantInvest: any;
  message: any;

  constructor(private router: Router,private donationService: DonationService,
    private storageService: StorageService,private projetsService: ProjetsService,
    private routes: ActivatedRoute
     ) { }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.recupererProjetDetails();
  }

  recupererProjetDetails() {
    this.idprojetSelect = this.routes.snapshot.params['idprojet'];
    console.log(this.idprojetSelect + 'yyyyyyyyyyyyyyyyyyyyyyiddd');
    this.projetsService.recupererProjetsparId(this.idprojetSelect).subscribe(data => {
    this.detailsProjets = data

      
      console.log(this.detailsProjets);
      this.nomprojets = this.detailsProjets.nomprojets
      this.action_restante = this.detailsProjets.action_restante


      this.description = this.detailsProjets.description
      this.donationtotalobtenu = this.detailsProjets.donationtotalobtenu

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
      this.nomStartups = this.detailsProjets.nomStartups 
    });
  }

  envoyedonation(){
    this.donationService.faireunedonation(this.idprojetSelect, this.currentUser.id, this.montantInvest).subscribe(data =>{
      this.message = data;
      Swal.fire({
        heightAuto: false,
        icon: 'success',
        text: 'donnation effectuer avec succès',
        showConfirmButton: false,
        timer: 2500
      })
      this.router.navigate(['/tabac/mesinvestissement']);
      this.reloadPage();
    }, error => {
      console.log(error);
      Swal.fire({
        heightAuto: false,
        icon: 'error',
        text: 'Erreur lors de la donnation',
        showConfirmButton: false,
        timer: 2500
      })
    });
  }
  reloadPage(): void {
    window.location.reload();
  }


}
