import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Startups } from '../Model/startups';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-inscriptstartups',
  templateUrl: './inscriptstartups.page.html',
  styleUrls: ['./inscriptstartups.page.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ]
})



export class InscriptstartupsPage implements OnInit {

  form: any = {
    username:null,
    email:null,
    password:null,
    nomcomplet:null,
    adresse:null,
    photo:null,
    nomStartups:null,
    contact:null,
    emailStartups:null,
    secteurActivite:null,
    stadeDeveloppement:null,
    numeroIdentification:null,
    descriptionStartups:null,
    dateCreation:null,
    proprietaire:null,
    formeJuridique:null,
    chiffreAffaire:null,
    localisation:null,
    pays:null,
  }
  selectedFile!: File;
  // investisseur: Investisseur = new Investisseur();

  startups: Startups = new Startups();

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmit(form: NgForm) {
    this.authService.registerStartups(this.selectedFile, this.startups)
      .subscribe(res => {
        console.log(res);
        if (res.success) {
          this.router.navigate(['/tabs/dashbord-start']);
        } else {
          console.log(res.message);
        }
      });
  }



}
