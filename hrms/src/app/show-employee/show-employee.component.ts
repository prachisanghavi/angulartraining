
import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { ExcelService } from '../service/excel.service';
import { read, utils, writeFile } from 'xlsx';

var abc : any[];


@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  employeeList: Employee[] = [];
    movies: any[] = [];
    rows: any[] = [];
    rows1: any[] = [];
   
    data : any [] =[];
  


  constructor(private employeeService:EmployeeService, private router: Router,private excelService:ExcelService) { }

  ngOnInit(): void {
   

 
 
    this.employeeList = this.employeeService.getEmployees();
 
  }
 
 
remove(id: number) {
  this. employeeService.removeUser(id);
  this.employeeList = this.employeeService.getEmployees();
}
exportAsXLSX():void {
  this.excelService.exportAsExcelFile(this.employeeList, 'employee data');
}

handleImport($event: any) {
  const files = $event.target.files;
  if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
          const wb = read(event.target.result);
          const sheets = wb.SheetNames;

          if (sheets.length) {
              this.rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
             this.employeeList = this.rows;
          

            
          }
      }
      reader.readAsArrayBuffer(file);
  }
  
}

}


