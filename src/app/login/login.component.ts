import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private loginService: AuthenticationService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    localStorage.removeItem("jwtAuthString");
    localStorage.removeItem("currentUser");
    this.loginService.logout();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  login() {
    this.loginService.login(this.loginForm).subscribe(
      response => {

        if (response.designation.match("BDM")) {
          this.router.navigateByUrl('bdm/homePage');
        }
        else if (response.designation.match("AGENT")) {
          this.router.navigateByUrl('agent/homePage');
        }
        else if (response.designation.match("TEAM LEADER")) {
          this.router.navigateByUrl('teamlead/homePage');
        }
      },
      error => {
        alert("Username or Password does not match. Please enter correct credentials.");
        this.router.navigateByUrl('login');
      }
    );
  }

}
