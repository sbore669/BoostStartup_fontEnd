import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-start',
  templateUrl: './dashbord-start.page.html',
  styleUrls: ['./dashbord-start.page.scss'],
})
export class DashbordStartPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  options={
    slidesPerView:1,   // NOMBRE DE SLIDE PAR PAGE = 1
    centeredSlider:true,
   // loop:true,
    spaceBetween:10,
    autoplay:false
  }

}
