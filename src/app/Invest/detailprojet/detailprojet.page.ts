import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetsService } from 'src/app/_services/projets.service';

@Component({
  selector: 'app-detailprojet',
  templateUrl: './detailprojet.page.html',
  styleUrls: ['./detailprojet.page.scss'],
})
export class DetailprojetPage implements OnInit {

  detailsProjets:any

  constructor(private projetsService: ProjetsService, private router: Router,
    private routes : ActivatedRoute
    ) { }

  ngOnInit() {
    this.recupererProjetDetails();
  }

  recupererProjetDetails(){
    const idprojet = this.routes.snapshot.params['idprojet'];
    console.log(idprojet);
    this.projetsService.recupererProjetsparId(idprojet).subscribe(data =>{
      this.detailsProjets = data
      console.log(this.detailsProjets);
    });
  }

}
