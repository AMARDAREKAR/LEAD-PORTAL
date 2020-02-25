import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CampaignService } from 'src/app/_services/campaign.service';
import { Campaign } from 'src/app/_models/campaign';
import { Asset } from 'src/app/_models/asset';

@Component({
  selector: 'app-bdm-campaign-management',
  templateUrl: './bdm-campaign-management.component.html',
  styleUrls: ['./bdm-campaign-management.component.css']
})
export class BdmCampaignManagementComponent implements OnInit {

  campaigns:Campaign[];
  assets:Asset[];

  constructor(private campaignService: CampaignService, private router: Router) {
    campaignService.getCampaigns().subscribe(response => this.campaigns=response);
    campaignService.getAssets().subscribe(response => this.assets=response);
  }

  ngOnInit() {
  }

  createCampaign() {
    this.router.navigate(['/bdm/campaignManagement/createCampaign']);
  }

  createAsset() {
    this.router.navigate(['/bdm/campaignManagement/createAsset']);
  }

}