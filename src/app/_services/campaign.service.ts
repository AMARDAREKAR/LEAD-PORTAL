import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campaign } from '../_models/campaign';
import { Observable } from 'rxjs';
import { Asset } from '../_models/asset';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private httpClient:HttpClient) { }

  postCampaign(campaign:Campaign)
  {
   return this.httpClient.post<Campaign>('http://localhost:8080/campaign',campaign);
  }

  getCampaigns()
  {
    return this.httpClient.get<Campaign[]>('http://localhost:8080/campaigns');
  }

  getAssets()
  {
    return this.httpClient.get<Asset[]>('http://localhost:8080/assets');
  }
}
