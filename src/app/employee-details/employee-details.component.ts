import { Employee, Address } from './../domain/employee';
import { UtilityService } from './../utility.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
    //employeeData: Employee = new Employee();
    employeeList : Employee[];
    searchName = '';
    fieldName = '';
    
    constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.showEmployeeData();
  }

  isNotNumber(param) {
    debugger;
    if(_.isString(param)) {
      return 1;
    }
    else {
      return 0;
    }

  }

  showEmployeeData() {
    this.utilityService.getEmployeeDetails().subscribe(
      data => this.processData(data),
      error => this.handleError(error)
    );
  }

  setLocalStorage(param) {
    if (param){
      localStorage.setItem('employeeDetails', JSON.stringify(param));
    }
  }

  processData(data) {
    if (_.isEmpty(localStorage.getItem('employeeDetails'))) {
      this.setLocalStorage(data.data);
    }
    this.employeeList = JSON.parse(localStorage.getItem('employeeDetails'));
  }

  handleError(error) {
    console.log(error);
  }



  

}
