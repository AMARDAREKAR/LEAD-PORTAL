import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lead } from '../_models/lead';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  
  constructor(private httpClient:HttpClient) { }

  postLead(lead:Lead)
  {
   return this.httpClient.post<Lead>('http://localhost:8080/lead',lead);
  }

  getLeads()
  {
    return this.httpClient.get<Lead[]>('http://localhost:8080/leads');
  }

  putLead(lead:Lead)
  {
   return this.httpClient.put<Lead>('http://localhost:8080/lead',lead);
  }

  deleteLead(lead:Lead)
  {
    return this.httpClient.delete("http://localhost:8080/lead/"+lead.leadId);
  }
}
