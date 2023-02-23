import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FormaddComponent } from '../formadd/formadd.component';
import { ModifierStartupsComponent } from '../modifier-startups/modifier-startups.component';
import { AuthService } from '../_services/auth.service';
import { InvestisseursService } from '../_services/investisseurs.service';
import { StartupsService } from '../_services/startups.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-profil-startups',
  templateUrl: './profil-startups.page.html',
  styleUrls: ['./profil-startups.page.scss'],
})
export class ProfilStartupsPage implements OnInit {
  presentingElement: any;
  currentUser: any
  inv: any;
  telephone: any;
  startup: any

  constructor(private authService: AuthService,
     private storageService: StorageService,
     private investisseursService: InvestisseursService,
     private router: Router,
     private startupsService: StartupsService,
     private modalCtrl: ModalController
     ) { }

  ngOnInit()  {
    //Permet de recupperer les information de l'utilisateur actuelle connecter
    this.currentUser = this.storageService.getUser();
    this.RecuperStartupParId();
    this.presentingElement = document.querySelector('.ion-page');
  }
  // recupererInvestisseurId(){
  //   const id_users = this.currentUser.id
  //   console.log(id_users);
  //   this.investisseursService.listerInvestisseursparId(id_users).subscribe(data =>{
  //     this.inv = data
  //     console.log(this.inv);
  //     this.telephone = this.inv.telephone
  //   })
    
  // }
  RecuperStartupParId() {
    const idUsers = this.currentUser.id
    this.startupsService.listerStartupsParId(idUsers).subscribe(data => {
      this.startup = data
      console.log(this.startup)
    })
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        // window.location.reload();
        this.router.navigate(['/typecompte']);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModifierStartupsComponent,
    });
    modal.present();
  }
}
