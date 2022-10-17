import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nestedform',
  templateUrl: './nestedform.component.html',
  styleUrls: ['./nestedform.component.css']
})
export class NestedformComponent implements OnInit {

  AddForm: FormGroup;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.AddForm = this.formBuilder.group({
      
      name:  ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      address:this.formBuilder.group({
        addre:[""],
        state:[""]
    }),
    countrys:this.formBuilder.array([]),
    cities:this.formBuilder.array([])
    
  })
}

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    

    console.log(this.AddForm.value);
    this.router.navigate(['/']);
    
  }
  addcountrys(){
    const cityForm = this.formBuilder.group({
      countryName: ['India'],
    });
    this.countrys.push(cityForm);


  }


  get countrys(){
  return this.AddForm.controls['countrys'] as FormArray
    }
    addCitites(){
      const cityForm = this.formBuilder.group({
        cityName: ['ahmedabad'],
       
      });
      this.cities.push(cityForm);
  
  
    }
  
  
    get cities(){
      return this.AddForm.controls['cities'] as FormArray
    }

}
