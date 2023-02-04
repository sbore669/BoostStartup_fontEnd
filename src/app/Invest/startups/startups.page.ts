import { Component, OnInit } from '@angular/core';
import { StartupsService } from 'src/app/_services/startups.service';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.page.html',
  styleUrls: ['./startups.page.scss'],
})
export class StartupsPage implements OnInit {
  startupss: any;

  constructor(private startupsService: StartupsService) { }

  ngOnInit() {
    this.recupererlesStartupValide();
  }
  
  recupererlesStartupValide(){
    this.startupsService.listzeAllStartupsValide().subscribe(data =>{
      this.startupss = data;
      console.log(data)
    })
  }

}
