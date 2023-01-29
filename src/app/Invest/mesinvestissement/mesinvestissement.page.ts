import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { InvestisseursService } from 'src/app/_services/investisseurs.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-mesinvestissement',
  templateUrl: './mesinvestissement.page.html',
  styleUrls: ['./mesinvestissement.page.scss'],
})
export class MesinvestissementPage implements OnInit {
  currentUser: any;
  inv: any;

  constructor(private investisseursService: InvestisseursService,
    private authService: AuthService,
      private storageService: StorageService,) { }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.recupererInvestisseurId();
    console.log(this.recupererInvestisseurId)
  }

  recupererInvestisseurId(){
    const id_users = this.currentUser.id
    console.log(id_users);
    this.investisseursService.listerInvestisseursparId(id_users).subscribe(data =>{
      this.inv = data
      console.log(this.inv)
    })
  }

  // recupererProjetStartups(){
  //   const id_users = this.currentUser.id
  //   console.log(id_users);
  //   this.projetsService.recupererProjetsStartups(id_users).subscribe(data =>{
  //     this.vostartups = data
  //     console.log(this.vostartups)
  //   });
  // }

}
