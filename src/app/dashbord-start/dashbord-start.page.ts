import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Projets } from '../Model/projets';
import { AuthService } from '../_services/auth.service';
import { ProjetsService } from '../_services/projets.service';
import { StorageService } from '../_services/storage.service';

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
  
  
  typesProjet: any[] = [{ id: 1, name: "Type 1" }, { id: 2, name: "Type 2" }, { id: 3, name: "Type 3" }];
  
  step = 1;
  

  constructor(private authService: AuthService,
     private storageService: StorageService,
     private router: Router,private projetsService: ProjetsService) { }

  

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.presentingElement = document.querySelector('.ion-page');
    console.log(this.currentUser);
  }
  nextStep(){
    this.suivant = false;
    this.step++;
  }
  backStep(){
    this.suivant = true;
    this.step--;
  }
  options={
    slidesPerView:1,   // NOMBRE DE SLIDE PAR PAGE = 1
    centeredSlider:true,
   // loop:true,
    spaceBetween:10,
    autoplay:false
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmit(form: NgForm) {
    console.log(this.projets);
    this.projetsService.creerprojets(this.currentUser.id, this.Idtypeprojets, this.selectedFile, this.projets)
      .subscribe( res => {
        console.log(res);
        if (res.message == "Projet créé avec succès") {
          this.router.navigate(['/validation']);
        } else {
          console.log("erreur");
        }
      });
  }

}
