
import { Component, OnInit, Input  } from '@angular/core';
//import { Target } from '../show-employee/show-employee.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
//abc = Target;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.abc)
  }

}
