import { Component} from '@angular/core';
import { Role } from 'src/app/_models/role';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  
  currentUser: User;

  homePageLink: String;
  leadManagementLink: String;
  employeeManagementLink: String;
  campaignManagementLink: String;
  profileLink: String;

  constructor(private router: Router, private loginService: AuthenticationService) {
    this.loginService.currentUser.subscribe(response => {
      this.currentUser = response;
      this.generateLinks();
      });
  }

  generateLinks() {
    if (this.currentUser) {
      if (this.currentUser.designation === Role.BDM) {
        this.homePageLink = "bdm/homePage";
        this.leadManagementLink = "bdm/leadManagement";
        this.profileLink = "bdm/profile";
        this.employeeManagementLink = "bdm/employeeManagement";
        this.campaignManagementLink = "bdm/campaignManagement";
      }
      else if (this.currentUser.designation === Role.TEAMLEADER) {
        this.homePageLink = "teamlead/homePage";
        this.leadManagementLink = "teamlead/leadManagement";
        this.profileLink = "teamlead/profile";
        this.employeeManagementLink = "teamlead/employeeManagement";
        this.campaignManagementLink = "teamlead/campaignManagement";
      }
      else if (this.currentUser.designation === Role.AGENT) {
        this.homePageLink = "agent/homePage";
        this.leadManagementLink = "agent/leadManagement";
        this.profileLink = "agent/profile";
      }
    }
  }

  get getLinks() {
    if (this.currentUser) return true;
  }

  get getEmployeeManagementLinks() {
    return this.currentUser && (this.currentUser.designation === Role.BDM || this.currentUser.designation === Role.TEAMLEADER);
  }

  get getCampaignManagementLinks() {
    return this.currentUser && this.currentUser.designation === Role.BDM;
  }
}
