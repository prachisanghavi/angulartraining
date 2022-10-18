import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prachichild',
  templateUrl: './prachichild.component.html',
  styleUrls: ['./prachichild.component.css']
})
export class PrachichildComponent implements OnInit {
  @Input() receivedParentMessage:string ;
   
  constructor() { }

  ngOnInit(): void {
  }

}
