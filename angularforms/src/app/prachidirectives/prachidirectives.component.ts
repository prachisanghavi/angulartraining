import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prachidirectives',
  templateUrl: './prachidirectives.component.html',
  styleUrls: ['./prachidirectives.component.css']
})
export class PrachidirectivesComponent implements OnInit {
  NewClassapply: boolean;
  newclass:Record<string,string >={};
setClass(){
  this.newclass ={
  'color':'blue',
  }
}
  constructor() { }

  ngOnInit(): void {
    this.setClass();
    this.NewClassapply = ! this.NewClassapply; 
  }

}
