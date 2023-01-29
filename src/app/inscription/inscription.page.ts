import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Investisseur } from '../Model/investisseur';
import { AuthService } from '../_services/auth.service';
import { TypeprojetsService } from '../_services/typeprojets.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    nomcomplet: null,
    adresse: null,
    photo: null,
    telephone: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  investisseur: Investisseur = new Investisseur();

  Idtypeprojets!: number;
  selectedFile!: File;
  typesProjet: any;


  // typesProjet: any[] = [{ id: 1, name: "Type 1" }, { id: 2, name: "Type 2" }, { id: 3, name: "Type 3" }];

  constructor(private authService: AuthService,
     private router: Router, private typeprojets: TypeprojetsService) { }

  ngOnInit() {
    this.typeprojets.listetypeprojets().subscribe(data =>{
      this.typesProjet = data
      console.log(data)
    })

  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmit(form: NgForm) {
    this.authService.registerInvestisseur(this.Idtypeprojets, this.selectedFile, this.investisseur)
      .subscribe({
        next : response => {
          console.log(response)
          this.router.navigate(['/tabac/acceuil']);
        },
        error : err => {
          console.log(err)
        }
      })

  }
}

