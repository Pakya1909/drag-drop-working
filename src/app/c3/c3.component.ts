import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {


  @Input() details !: string

  constructor() { 
    console.log('c3-working')
    console.log(this.details)
  }

  ngOnInit(): void {
  }

}
