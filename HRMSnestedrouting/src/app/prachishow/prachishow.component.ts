import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prachishow',
  templateUrl: './prachishow.component.html',
  styleUrls: ['./prachishow.component.css']
})
export class PrachishowComponent implements OnInit {

  employeeList: Employee[] = [];
  



constructor(private employeeService:EmployeeService, private router: Router) { }

ngOnInit(): void {
 



  this.employeeList = this.employeeService.getEmployees();

}


remove(id: number) {
this. employeeService.removeUser(id);
this.employeeList = this.employeeService.getEmployees();
}


}



