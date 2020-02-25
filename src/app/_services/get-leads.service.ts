import { Injectable } from '@angular/core';
import { LeadService } from './lead.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Lead } from '../_models/lead';

@Injectable({
  providedIn: 'root'
})
export class GetLeadsService implements Resolve<Lead []>{

  constructor(private leadService: LeadService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lead[]> {
    
    return this.leadService.getLeads();
  }
}
