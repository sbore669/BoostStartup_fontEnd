import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { InvestisseursService } from 'src/app/_services/investisseurs.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  presentingElement: any;
  currentUser: any
  inv: any;
  telephone: any;

  constructor(private authService: AuthService,
     private storageService: StorageService,
     private investisseursService: InvestisseursService,
     private router: Router) { }

  ngOnInit()  {
    //Permet de recupperer les information de l'utilisateur actuelle connecter
    this.currentUser = this.storageService.getUser();
    this.recupererInvestisseurId();
    this.presentingElement = document.querySelector('.ion-page');
  }
  
  recupererInvestisseurId(){
    const id_users = this.currentUser.id
    console.log(id_users);
    this.investisseursService.listerInvestisseursparId(id_users).subscribe(data =>{
      this.inv = data
      console.log(this.inv);
      this.telephone = this.inv.telephone
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

}
