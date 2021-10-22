import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiEmployeeService } from './../services/api-employee.service';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = { name: '', email: '', phone: 0 }

  constructor(
    public apiREST: ApiEmployeeService,
    public router: Router
  ) { }

  ngOnInit() { }

  addEmployee(dataEmployee) {
    this.apiREST.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employees-list'])
    })
  }

}
