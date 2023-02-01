import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { InvestisseursService } from 'src/app/_services/investisseurs.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  currentUser: any;
  inv: any;
  telephone: any;
  notff: any;

  constructor(private authService: AuthService,
    private storageService: StorageService,
    private investisseursService: InvestisseursService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.recupererInvestisseurId();
  }
  recupererInvestisseurId(){
    const id_users = this.currentUser.id
    console.log(id_users);
    this.investisseursService.listerInvestisseursparId(id_users).subscribe(data =>{
      this.inv = data
      this.notff = this.inv.notifications
      console.log(this.inv);
    })
    
  }

}
