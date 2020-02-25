import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bdm-employee-management',
  templateUrl: './bdm-employee-management.component.html',
  styleUrls: ['./bdm-employee-management.component.css']
})
export class BdmEmployeeManagementComponent implements OnInit {

  employees : Employee[];
  searchKey : String;
  
  constructor(private route: ActivatedRoute, private employeeService : EmployeeService, private router: Router) {
    this.employees = this.route.snapshot.data['employees'];
   }

  ngOnInit() {
  }
  
  addEmployee()
  {
    this.router.navigate(['/bdm/employeeManagement/createEmployee']);
  }
  updateEmployee(employee:Employee)
  {
    this.router.navigate(['/bdm/employeeManagement/updateEmployee/'+employee.employeeId]);
  }
  setEnabledFlag(employee:Employee)
  {
    if(employee.enabledFlag == 1)
    {
      employee.enabledFlag=0;
      this.employeeService.changeEmployeeStatus(employee).subscribe();
    }
    else
    {
      employee.enabledFlag=1;
      this.employeeService.changeEmployeeStatus(employee).subscribe();
    }
  }

}
