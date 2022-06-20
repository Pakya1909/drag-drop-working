import { Component, NgModule, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
 

export class AppComponent {

  details : string = 'pankaj'

  fillerName(e:any)
  {
    console.log('app-working')
  }

  constructor()
  {

  }
 
}
   