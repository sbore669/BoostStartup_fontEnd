import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  presentingElement: any;
  currentUser: any

  constructor(private authService: AuthService, private storageService: StorageService,private router: Router) { }

  ngOnInit()  {
    //Permet de recupperer les information de l'utilisateur actuelle connecter
    this.currentUser = this.storageService.getUser();

    this.presentingElement = document.querySelector('.ion-page');

  
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        // window.location.reload();
        this.router.navigate(['/connexion']);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
