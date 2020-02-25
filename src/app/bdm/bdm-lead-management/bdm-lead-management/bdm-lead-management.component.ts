import { Component, OnInit } from '@angular/core';
import { Lead } from 'src/app/_models/lead';
import { Router, ActivatedRoute } from '@angular/router';
import { LeadService } from 'src/app/_services/lead.service';

@Component({
  selector: 'app-bdm-lead-management',
  templateUrl: './bdm-lead-management.component.html',
  styleUrls: ['./bdm-lead-management.component.css']
})
export class BdmLeadManagementComponent implements OnInit {

  leads:Lead[];

  constructor(private route: ActivatedRoute,private router: Router,private leadService:LeadService) {
    this.leads = this.route.snapshot.data['leads'];
  }

  ngOnInit() {
  }
  
  addLead()
  {
    this.router.navigate(['/bdm/leadManagement/createLead']);
  }
  updateLead(lead:Lead)
  {
    this.router.navigate(['/bdm/leadManagement/updateLead/'+lead.leadId]);
  }
  deleteLead(lead:Lead)
  {
    this.leadService.deleteLead(lead).subscribe(response => {
      console.log("delete positive");
      this.leadService.getLeads().subscribe(res => this.leads=res)});
  }
}

