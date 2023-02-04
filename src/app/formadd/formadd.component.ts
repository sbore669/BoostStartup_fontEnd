import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { Projets } from '../Model/projets';
import { ProjetsService } from '../_services/projets.service';
import { StorageService } from '../_services/storage.service';
import { TypeprojetsService } from '../_services/typeprojets.service';

@Component({
  selector: 'app-formadd',
  templateUrl: './formadd.component.html',
  styleUrls: ['./formadd.component.scss'],
})
export class FormaddComponent implements OnInit {
  name!: any;

  form: any = {
    nomprojets: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    objectif: new FormControl('', [Validators.required,]),
    budgetPrevisonnel: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pret_maximun: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pourcentage: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(2)]),
    objectifpret: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(10)]),
    description: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(250)]),
    minimun_donation:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    pret_minimun: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    nbretotal_action: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(5)]),
    dureeProjet: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    prix_action: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(10)]),
    photo: new FormControl('', [Validators.required])
  };

  currentUser: any;
  typesProjet: any;
  suivant: boolean = true;
  step = 1;
  projets: Projets = new Projets();
  Idtypeprojets!: number;
  selectedFile!: File;

  constructor(private modalCtrl: ModalController,
    private storageService: StorageService,
    private router: Router,
    private projetsService: ProjetsService,
    private typeprojets: TypeprojetsService) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.typeprojets.listetypeprojets().subscribe(data => {
      this.typesProjet = data
      console.log(data)
    })
  }
  nextStep() {
    this.suivant = false;
    this.step++;
  }
  backStep() {
    this.suivant = true;
    this.step--;
  }
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmit(form: NgForm) {
    console.log(this.projets);
    this.projetsService.creerprojets(this.currentUser.id, this.Idtypeprojets, this.selectedFile, this.projets)
      .subscribe(res => {
        console.log(res);
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          text: 'Projet créé avec succès',
          showConfirmButton: false,
          timer: 2500
        })
        this.router.navigateByUrl('/tabs/projetstartups');
        if (res.message == "Projet créé avec succès") {
          this.confirm();
        } else {
          Swal.fire({
            heightAuto: false,
            icon: 'error',
            text: 'Erreur dans le formulaire',
            showConfirmButton: false,
            timer: 2500
          })
          console.log("erreur");
        }
      });
  }


}
