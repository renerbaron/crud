import { Component, OnInit } from '@angular/core';
import { ApiEmployeeService } from '../services/api-employee.service';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  Employee: any = [];

  constructor(
    public apiREST: ApiEmployeeService
  ) { }

  ngOnInit() {
    this.loadEmployees()
  }

  // Get employees list
  loadEmployees() {
    return this.apiREST.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    })
  }

  // Delete employee
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.apiREST.deleteEmployee(id).subscribe(data => {
        this.loadEmployees()
      })
    }
  }  

}