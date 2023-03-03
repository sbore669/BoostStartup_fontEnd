import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionService } from '../_services/action.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-investstartp',
  templateUrl: './investstartp.page.html',
  styleUrls: ['./investstartp.page.scss'],
})
export class InveststartpPage implements OnInit {
  actionnaire: any;
  actrest: any;

  responsive=true
  p:number=1;
  searhText: any

  constructor(private router: Router,
    private routes: ActivatedRoute,private storageService: StorageService,private actionService: ActionService) { }

  ngOnInit() {
    // this.recupererProjetStartups();
    this.recupererActionprojets();
  }

  recupererActionprojets(){
    const idprojet = this.routes.snapshot.params['idprojet'];
    this.actionService.listerlesActionnairedunProjet(idprojet).subscribe(data =>{
      this.actionnaire = data
      for(let text of this.actionnaire){
        this.actrest = text.projets.action_restante
        console.log('huguiegfuiegfuiegfuiefiuegfieiugfiegfieugfiugeifgirugfiugifug' + text.projets.prettotalobtenu)
      }
      console.log(this.actionnaire);
    })
  }

}
