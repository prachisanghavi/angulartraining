import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-prachiadd',
  templateUrl: './prachiadd.component.html',
  styleUrls: ['./prachiadd.component.css']
})
export class PrachiaddComponent implements OnInit {

  checkForm: FormGroup;
  formSubmitted : boolean = false; 
  i : number;

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.checkForm = this.formBuilder.group({
      id: 0,
      name:  ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required,Validators.pattern('^[0-9]+')]],
      address:['', [Validators.required]],
      gender: ['', [Validators.required]],
    })
    
  }

  employeeList: Employee[] = [];
  ngOnInit(): void {
   

    this.employeeList = this.employeeService.getEmployees();
    //var item = this.employeeService.getEmployees();
  }
  onSubmit() {
    // console.log(this.userModel);
    // console.log(this.name,this.empoloyeeID);
    if(this.checkForm.valid){
    
    var item = this.employeeService.getEmployees();
    this.i = this.employeeList.length + 1;
 
    this.checkForm.controls['id'].setValue(this.i);
    let a = this.checkForm.value;
    
  this.employeeList.push(a);
  this.router.navigate(['/']);
} else {
  this.formSubmitted = true;

}


  }

}

