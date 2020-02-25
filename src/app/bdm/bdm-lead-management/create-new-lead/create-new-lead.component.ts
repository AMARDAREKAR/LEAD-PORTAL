import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LeadService } from 'src/app/_services/lead.service';
import { CampaignService } from 'src/app/_services/campaign.service';
import { Campaign } from 'src/app/_models/campaign';
import { Asset } from 'src/app/_models/asset';

@Component({
  selector: 'app-create-new-lead',
  templateUrl: './create-new-lead.component.html',
  styleUrls: ['./create-new-lead.component.css']
})
export class CreateNewLeadComponent implements OnInit {
  
  leadForm: FormGroup;
  success:boolean;
  campaigns: Campaign[];
  assets:Asset[];

  constructor(private campaignService: CampaignService, private leadService: LeadService, private router: Router, private fb: FormBuilder) { 
    this.success=false;
    campaignService.getAssets().subscribe(response => this.assets=response);
    campaignService.getCampaigns().subscribe(response => this.campaigns=response);
  }

  ngOnInit() {
    this.leadForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      employeeId: [''],
      designation: [''],
      password: [''],
      department: ['Choose Lead Type'],
      companyName: [''],
      industryType: [''],
      employeeSize: ['Choose Employee Size'],
      domain: [''],
      sicCode: [''],
      naicsCode: [''],
      revenueSize: ['Choose Revenue Size'],
      employeeSizeLink: [''],
      industryTypeLink: [''],
      revenueSizeLink: [''],
      sicCodeLink: [''],
      naicsCodeLink: [''],
      country: [''],
      state: [''],
      city: [''],
      zipcode: [''],
      addressLine1: [''],
      addressLine2: [''],
      campaign: ["Choose Campaign Name"],
      asset: ["Choose Asset Title"],
      jobTitle: [''],
      jobLevel: ['Choose Job Level'],
      jobDepartment: ['Choose Job Department'],
      email: [''],
      jobTitleLink: [''],
      phoneNumber: [''],
      directNumber: ['']
    });
  }

  createLead(){
    console.log(this.leadForm.value);
    
    var campaignId = Number(this.leadForm.get('campaign').value);
    var assetId = Number(this.leadForm.get('asset').value);

    this.leadForm.controls['campaign'].setValue(campaignId);
    this.leadForm.controls['asset'].setValue(assetId);
    console.log(this.leadForm.value);

    this.leadService.postLead(this.leadForm.value).subscribe(
      response => {
        alert("Lead added successfully with Id : " + response.leadId);
        this.success=true;
        this.router.navigate(['/bdm/leadManagement']);
      },
      error => {
        if ([409].indexOf(error.status) !== -1) {
          alert("Employee Id already exists. Kindly use another employeeId.");
        }
      });
    } 
}
