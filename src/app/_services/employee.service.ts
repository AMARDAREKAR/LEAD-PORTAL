import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../_models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  getEmployees()
  {
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }
  getEmployee(employeeId:number)
  {
    return this.httpClient.get<Employee>('http://localhost:8080/employee/'+employeeId);
  }
  deleteEmployee(employee:Employee)
  {
    return this.httpClient.delete("http://localhost:8080/employee/"+employee.employeeId);
  }
  postEmployee(employee:Employee)
  {
   return this.httpClient.post<Employee>('http://localhost:8080/employee',employee);
  }
  putEmployee(employee:Employee)
  {
   return this.httpClient.put<Employee>('http://localhost:8080/employee',employee);
  }
  changeEmployeeStatus(employee:Employee)
  {
   return this.httpClient.put<Employee>('http://localhost:8080/changeEmployeeStatus',employee);
  }
}