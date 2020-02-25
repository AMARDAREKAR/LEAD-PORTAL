import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  success:boolean;

  constructor(private employeeService: EmployeeService, private router: Router, private fb: FormBuilder) { 
    this.success=false;
  }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      employeeId: ['', [Validators.required]],
      designation: ['AGENT', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    });
  }

  createEmployee() {
    this.employeeService.postEmployee(this.employeeForm.value).subscribe(
      response => {
        alert("Employee added successfully with Id : " + response.employeeId);
        this.success=true;
        this.router.navigate(['/bdm/employeeManagement']);
      },
      error => {
        if ([409].indexOf(error.status) !== -1) {
          alert("Employee Id already exists. Kindly use another employeeId.");
        }
      });
    } 
}