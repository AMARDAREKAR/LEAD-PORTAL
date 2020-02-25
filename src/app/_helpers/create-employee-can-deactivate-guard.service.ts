import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from '../bdm/bdm-employee-management/create-employee/create-employee.component';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CreateEmployeeCanDeactivateService implements CanDeactivate<CreateEmployeeComponent> {

    canDeactivate(component: CreateEmployeeComponent) : boolean {

        if(component.success)
        {
            return true;
        }
        else if(component.employeeForm.dirty)
        {
            return confirm("Are you sure you want to discard your changes ?");
        }

        return true;
    }
}