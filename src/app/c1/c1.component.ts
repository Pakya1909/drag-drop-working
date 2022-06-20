import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  input = ['name','place','animal','thing']
  output = ['Pankaj','kanpur','owl','nothing']
  advance = ['18324','nagpur','sleeping','idk']
  analysis = ['data analysis','google','panda','everything']


  // fillerNode = [
  //   {'input': ['name','place','animal','thing']},
  //   {'output' : ['Pankaj','kanpur','owl','nothing']},
  //   { 'advance' : ['18324','nagpur','sleeping','idk']},
  //   { 'analysis'  : ['data analysis','google','panda','everything']}
  // ]

  name : string = 'pankaj'

  constructor() {
    console.log(this.name)
  }

  ngOnInit(): void {
  }

} 
  