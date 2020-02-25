import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampaignService } from 'src/app/_services/campaign.service';

@Component({
  selector: 'app-create-new-campaign',
  templateUrl: './create-new-campaign.component.html',
  styleUrls: ['./create-new-campaign.component.css']
})
export class CreateNewCampaignComponent implements OnInit {

  campaignForm: FormGroup;
  success:boolean;

  constructor(private campaignService: CampaignService, private router: Router, private fb: FormBuilder) { 
    this.success=false;
  }

  ngOnInit() {
    this.campaignForm = this.fb.group({
      campaignName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      campaignId: [0, [Validators.required]],
    });
  }

  createCampaign() {
    this.campaignService.postCampaign(this.campaignForm.value).subscribe(
      response => {
        alert("Campaign added successfully with Id : " + response.campaignId);
        this.success=true;
        this.router.navigate(['/bdm/campaignManagement']);
      },
      error => {
        if ([409].indexOf(error.status) !== -1) {
          alert("Campaign Id already exists. Kindly use another campaignId.");
        }
      });
    } 

}
