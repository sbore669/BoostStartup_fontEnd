import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }


  ngOnInit(): void {
    // if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    //   if (this.isLoggedIn) {
    //     this.router.navigateByUrl('/acceuil')
    //   }
    // }
  }

  onSubmit(): void {
    console.log(this.form);
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {      

        if(data.roles[0]=='ROLE_USER'){
          this.storageService.saveUser(data);
          console.log("===================",data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigate(['/tabac/acceuil']);
        }else{
          this.errorMessage = 'Pas Autoriser ';
          this.isLoginFailed = true;
          
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        if(this.errorMessage == "Votre Startups est en attente de Validation")
        {
         // this.router.navigate(['/validation']);
        }
      }
    });
  }

 /* onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/tabac/acceuil']);
        this.roles = this.storageService.getUser().roles;
        //this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }*/

  reloadPage(): void {
    window.location.reload();
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        // window.location.reload();
        this.router.navigateByUrl("/connexion")
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
