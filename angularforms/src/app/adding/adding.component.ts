import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from './employee';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {
   
  constructor( private router: Router) { }
  model = new Employee('','');
  ngOnInit(): void {

  }
  onSubmit(){
    this.router.navigate(['/']);}
    
  }

  



