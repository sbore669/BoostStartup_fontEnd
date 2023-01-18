import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscriptstartups',
  templateUrl: './inscriptstartups.page.html',
  styleUrls: ['./inscriptstartups.page.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ]
})

export class InscriptstartupsPage implements OnInit {
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
