import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prachiparent',
  templateUrl: './prachiparent.component.html',
  styleUrls: ['./prachiparent.component.css']
})
export class PrachiparentComponent implements OnInit {

  messageToSendP:string='';
    constructor(){

    }
    ngOnInit(): void {
        
    }
    sendToChild(message:string){
        this.messageToSendP=message;
    }
}
