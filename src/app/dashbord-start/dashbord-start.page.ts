import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { FormaddComponent } from '../formadd/formadd.component';
import { Projets } from '../Model/projets';
import { AuthService } from '../_services/auth.service';
import { ProjetsService } from '../_services/projets.service';
import { StorageService } from '../_services/storage.service';
import { TypeprojetsService } from '../_services/typeprojets.service';

@Component({
  selector: 'app-dashbord-start',
  templateUrl: './dashbord-start.page.html',
  styleUrls: ['./dashbord-start.page.scss'],
})
export class DashbordStartPage implements OnInit {

  suivant: boolean = true;

  presentingElement: any;
  currentUser: any
  selectedFile!: File;
  projets: Projets = new Projets();
  Idtypeprojets!: number;
  id_users!: number;
  step = 1;
  typesProjet: any;
  sommetotale: any;
  nbreprojets: any;
  vostartups: any;
  modal: any;

  form: any ={
    nomprojets: null,
    objectif: null,
    budgetPrevisonnel: null,
    pret_maximun: null,
    pourcentage: null,
    objectifpret: null,
    description: null,
    minimun_donation: null,
    pret_minimun: null,
    nbretotal_action: null,
    dureeProjet: null,
    prix_action: null,
    photo: null,
  }
  totalpret: any;
  totalAction: any;


  constructor(private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private projetsService: ProjetsService,
    private typeprojets: TypeprojetsService,
    private modalCtrl: ModalController) { }
  ngOnInit() {
    this.currentUser = this.storageService.getUser();
  //this.presentingElement = document.querySelector('.ion-page');
    console.log(this.currentUser);
    this.typeprojets.listetypeprojets().subscribe(data => {
      this.typesProjet = data
      console.log(data)
    })
    this.recupererTotalstartups();
    this.recupererTotalprojetsParstartups();
    this.recupererProjetStartups();
    this.recuperTotalPretStartup();
    this.recuperTotalActionStartup();
  }

  nextStep() {
    this.suivant = false;
    this.step++;
  }
  backStep() {
    this.suivant = true;
    this.step--;
  }
  options = {
    slidesPerView: 1,   // NOMBRE DE SLIDE PAR PAGE = 1
    centeredSlider: true,
    // loop:true,
    spaceBetween: 10,
    autoplay: false
  }

   reloadPage(): void {
    window.location.reload();
  }

  recupererProjetStartups() {
    const id_users = this.currentUser.id
    console.log(id_users);
    this.projetsService.recupererProjetsStartups(id_users).subscribe(data => {
      this.vostartups = data
      console.log(this.vostartups)
    });
  }
  recupererTotalstartups() {
    const id_users = this.currentUser.id
    this.projetsService.lasommedesprojetsStartups(id_users).subscribe(data => {
      this.sommetotale = data
      console.log(this.sommetotale)
    })
  }

  recupererTotalprojetsParstartups() {
    const id_users = this.currentUser.id
    this.projetsService.nombredeprojetsparStartups(id_users).subscribe(data => {
      this.nbreprojets = data
      console.log(this.nbreprojets)
    })
  }
  recuperTotalPretStartup(){
    const id_users = this.currentUser.id
    this.projetsService.totalprettotalparStarup(id_users).subscribe(data => {
      this.totalpret = data
      console.log(this.totalpret)
    })
  }
  recuperTotalActionStartup(){
    const id_users = this.currentUser.id
    this.projetsService.totalActionparStarup(id_users).subscribe(data => {
      this.totalAction = data
      console.log(this.totalAction)
    })
  }


  //Modal page
  message = 'This modal example uses the modalController to present and dismiss modals.';

  

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: FormaddComponent,
    });
    modal.present();

  }
  //fin Modal

}
