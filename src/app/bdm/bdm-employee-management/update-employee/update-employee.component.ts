import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeId: number;
  employeeForm: FormGroup;
  employee: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router, private fb: FormBuilder) {
    this.employeeId = this.route.snapshot.params['employeeId'];

    this.employeeForm = this.fb.group({
      firstName: [{value: '', disabled:true },[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      lastName: [{value: '', disabled:true },[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      employeeId: [{value: '', disabled:true },[Validators.required]],
      designation: [{value: 'AGENT', disabled:true },[Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    });
  }

  ngOnInit() {

    this.employeeService.getEmployee(this.employeeId).subscribe(
      response => {
        this.employee = response;
        this.employeeForm.controls.employeeId.setValue(response.employeeId);
        this.employeeForm.controls.firstName.setValue(response.firstName);
        this.employeeForm.controls.lastName.setValue(response.lastName);
        this.employeeForm.controls.designation.setValue(response.designation);
      },

      error => {
        if ([404].indexOf(error.status) !== -1) {
          alert("Employee Not Present");
          this.router.navigate(['/bdm/employeeManagement']);
        }
      }
    );
  }

  updateEmployee() {
    this.employee.password=this.employeeForm.controls.password.value;
    this.employeeService.putEmployee(this.employee).subscribe(response=>{ 
      alert("Employee updated successfully with Id : "+response.employeeId); 
      this.router.navigate(['/bdm/employeeManagement']);
    });
  }
}
