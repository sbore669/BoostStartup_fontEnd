import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  presentingElement: any;

  constructor() { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  
  }

}
