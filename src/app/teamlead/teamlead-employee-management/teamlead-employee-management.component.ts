import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teamlead-employee-management',
  templateUrl: './teamlead-employee-management.component.html',
  styleUrls: ['./teamlead-employee-management.component.css']
})
export class TeamleadEmployeeManagementComponent implements OnInit {

  employees : Employee[];
  searchKey : String;
  
  constructor(private employeeService : EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees()
  {
    this.employeeService.getEmployees().subscribe(response => {this.employees=response});
  }
  addEmployee()
  {
    this.router.navigate(['/teamlead/employeeManagement/employee']);
  }
}
