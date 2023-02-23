import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { Startups } from '../Model/startups';
import { AuthService } from '../_services/auth.service';
import { StartupsService } from '../_services/startups.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-modifier-startups',
  templateUrl: './modifier-startups.component.html',
  styleUrls: ['./modifier-startups.component.scss'],
})

export class ModifierStartupsComponent implements OnInit {
  name!: any;
  suivant: boolean = true;

  form1: any = {
    username:'',
    email:'',
    password:'',
    nomcomplet:'',
    adresse:'',
    photo:'',
    nomStartups:'',
    contact:'',
    emailStartups:'',
    secteurActivite:'',
    stadeDeveloppement:'',
    numeroIdentification:'',
    descriptionStartups:'',
    dateCreation:'',
    proprietaire:'',
    formeJuridique:'',
    chiffreAffaire:'',
    localisation:'',
    pays:'',
  }

  username1: any;
  email1: any;
  password1: any;
  nomcomplet1: any;
  adresse1: any;
  photo1: any;
  nomStartups1: any;
  contact1: any;
  emailStartups1: any;
  secteurActivite1: any;
  stadeDeveloppement1: any;
  numeroIdentification1: any;
  descriptionStartups1: any;
  dateCreation1: any;
  proprietaire1: any;
  formeJuridique1: any;
  chiffreAffaire1: any;
  localisation1: any;
  pays1: any;

  selectedFile!: File;
  step = 1;
  start: any
  mof: any
  currentUser: any

  startups: Startups = new Startups();
  errr: any;

  constructor(private modalCtrl: ModalController,
    private authService: AuthService,
    private storageService: StorageService,
    private startupsService: StartupsService,
    private routes: ActivatedRoute,
    private router: Router,) { }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
  nextStep() {
    this.suivant = false;
    this.step++;
  }
  backStep() {
    this.suivant = true;
    this.step--;
  }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.RecuperStartupParId();
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  RecuperStartupParId() {
    const idUsers = this.currentUser.id
    this.startupsService.listerStartupsParId(idUsers).subscribe(data => {
      this.start = data
      this.username1 = this.start.username
      this.email1 = this.start.email
      this.password1= this.start.password
      this.nomcomplet1 = this.start.nomcomplet
      this.adresse1= this.start.adresse
      this.photo1= this.start.photo
      this.nomStartups1= this.start.nomStartups
      this.contact1= this.start.contact
      this.emailStartups1= this.start.emailStartups
      this.secteurActivite1= this.start.secteurActivite
      this.stadeDeveloppement1= this.start.stadeDeveloppement
      this.numeroIdentification1= this.start.numeroIdentification
      this.descriptionStartups1= this.start.descriptionStartups
      this.dateCreation1= this.start.dateCreation
      this.proprietaire1= this.start.proprietaire
      this.formeJuridique1= this.start.formeJuridique
      this.chiffreAffaire1= this.start.chiffreAffaire
      this.localisation1= this.start.localisation
      this.pays1 = this.start.pays
      console.log(this.start)
    })
  }

  // onSubmit(form: NgForm) {

  //   this.authService.registerStartups(this.selectedFile, this.startups)
  //     .subscribe(res => {
  //       console.log(res);
  //       if (res.message == "Startup cree avec succès!") {
  //         this.router.navigate(['/validation']);
  //       } else {
  //         console.log("erreur");
  //       }
  //     });
  // }

  onSubmit(form1: NgForm){
    const idUsers = this.currentUser.id
    console.log(this.startups)
    this.authService.modifierUneStartups(idUsers,this.selectedFile,this.startups).subscribe(data =>{
      this.mof=data
      console.log(data);
      Swal.fire({
        heightAuto: false,
        icon: 'success',
        text: this.mof.message,
        showConfirmButton: false,
        timer: 5000
      })
      this.router.navigate(['/profil-startups']);
    }, error => {
      this.errr = error
     // this.message = error.message
      console.log(error);
      Swal.fire({
        heightAuto: false,
        icon: 'error',
        text: this.errr.error.message,
        showConfirmButton: false,
        timer: 2500
      })
    });
  }
}
