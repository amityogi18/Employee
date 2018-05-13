import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UtilityService {

  constructor(private http: HttpClient) { }

  private employeeDetailsUrl = 'assets/dummyEmployeeDetails.json';

  getEmployeeDetails() {
    return this.http.get(this.employeeDetailsUrl);
  }

}
