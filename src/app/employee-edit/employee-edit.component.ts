import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiEmployeeService } from './../services/api-employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})

export class EmployeeEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  employeeData: any = {};

  constructor(
    public apiREST: ApiEmployeeService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.apiREST.getEmployee(this.id).subscribe((data: {}) => {
      this.employeeData = data;
    })
  }

  // Update employee data
  updateEmployee() {
    if(window.confirm('Are you sure, you want to update?')){
      this.apiREST.updateEmployee(this.id, this.employeeData).subscribe(data => {
        this.router.navigate(['/employees-list'])
      })
    }
  }

}
