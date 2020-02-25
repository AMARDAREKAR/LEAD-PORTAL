import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;

  constructor(private loginService: AuthenticationService, private router: Router) {
    this.currentUser = this.loginService.currentUserValue;
  }

  ngOnInit() {
    if (this.currentUser) {
      if (this.currentUser.designation.match("BDM")) {
        this.router.navigateByUrl('bdm/homePage');
      }
      else if (this.currentUser.designation.match("AGENT")) {
        this.router.navigateByUrl('agent/homePage');
      }
      else if (this.currentUser.designation.match("TEAM LEADER")) {
        this.router.navigateByUrl('tl/homePage');
      }
    }
    else
    {
      this.router.navigateByUrl('login');
    }
  }
}
