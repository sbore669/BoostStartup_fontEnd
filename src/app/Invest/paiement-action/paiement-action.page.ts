import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionService } from 'src/app/_services/action.service';
import { ProjetsService } from 'src/app/_services/projets.service';
import { StorageService } from 'src/app/_services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paiement-action',
  templateUrl: './paiement-action.page.html',
  styleUrls: ['./paiement-action.page.scss'],
})
export class PaiementActionPage implements OnInit {

  Idprojet: any
  idUsers: any
  nombreaction: any
  message: any;
  currentUser: any
  detailsProjets: any;
  nomprojets: any;
  action_restante: any;
  description: any;
  donationtotalobtenu: any;
  image: any;
  minimun_donation: any;
  idprojet: any;
  nbretotal_action: any;
  objectifpret: any;
  objectif: any;
  pourcentage: any;
  pret_maximun: any;
  pret_minimun: any;
  prettotalobtenu: any;
  prix_action: any;
  nomStartups: any;
  idprojetSelect: any;
  apayer: any
  messageService: any;
  errr: any;

  constructor(private router: Router, private actionService: ActionService,
    private storageService: StorageService, private projetsService: ProjetsService,
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
      this.prettotalobtenu = this.detailsProjets.prettotalobtenu
      this.prix_action = this.detailsProjets.prix_action
      this.nomStartups = this.detailsProjets.nomStartups
    });

  }
  // faireuneaction() {
  //   this.actionService.acquerirUneaction(this.idprojetSelect, this.currentUser.id, this.nombreaction)
  //   .subscribe(data => {
  //     console.log('ddddddddddddddiuoiduiooudoiduoiduodkeita')
  //     Swal.fire({
  //       heightAuto: false,
  //       icon: 'success',
  //       text: 'Action acquis avec succès',
  //       showConfirmButton: false,
  //       timer: 2500
  //     })
  //     this.message = data;

  //   }, error => console.log(error));
  // }
  faireuneaction() {
    this.actionService.acquerirUneaction(this.idprojetSelect, this.currentUser.id, this.nombreaction)
      .subscribe(data => {
        console.log('ddddddddddddddiuoiduiooudoiduoiduodkeita')
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          text: 'Action acquis avec succès',
          showConfirmButton: false,
          timer: 2500
        })
        this.message = data;
        this.router.navigate(['/tabac/mesinvestissement']);
      }, error => {
        this.errr = error
        console.log(error);
        Swal.fire({
          heightAuto: false,
          icon: 'error',
          text: this.errr.error,
          showConfirmButton: false,
          timer: 2500
        })
      });
  }

  /* 
  creeaction() {
    this.actionService.creeaction(this.idUsers, this.Idprojet, this.nombreaction)
      .subscribe(data => {
        this.message = data;
      }, error => console.log(error));
  }
}
  */

}
