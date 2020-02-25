import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { BdmHomePageComponent } from './bdm/bdm-home-page/bdm-home-page.component';
import { BdmProfileComponent } from './bdm/bdm-profile/bdm-profile.component';
import { HomeComponent } from './_components/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TablefilterPipe } from './tablefilter.pipe';
import { AgentHomePageComponent } from './agent/agent-home-page/agent-home-page.component';
import { AgentLeadManagementComponent } from './agent/agent-lead-management/agent-lead-management.component';
import { AgentProfileComponent } from './agent/agent-profile/agent-profile.component';
import { TeamleadHomePageComponent } from './teamlead/teamlead-home-page/teamlead-home-page.component';
import { TeamleadEmployeeManagementComponent } from './teamlead/teamlead-employee-management/teamlead-employee-management.component';
import { TeamleadLeadManagementComponent } from './teamlead/teamlead-lead-management/teamlead-lead-management.component';
import { TeamleadLeadProfileComponent } from './teamlead/teamlead-lead-profile/teamlead-lead-profile.component';
import { UpdateEmployeeComponent } from './bdm/bdm-employee-management/update-employee/update-employee.component';
import { BdmEmployeeManagementComponent } from './bdm/bdm-employee-management/bdm-employee-management/bdm-employee-management.component';
import { CreateEmployeeComponent } from './bdm/bdm-employee-management/create-employee/create-employee.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './_components/access-denied/access-denied.component';
import { CreateNewCampaignComponent } from './bdm/bdm-campaign-management/create-new-campaign/create-new-campaign.component';
import { BdmCampaignManagementComponent } from './bdm/bdm-campaign-management/bdm-campaign-management/bdm-campaign-management.component';
import { JwtAuthService } from './_services/jwt-auth.service';
import { BdmLeadManagementComponent } from './bdm/bdm-lead-management/bdm-lead-management/bdm-lead-management.component';
import { CreateNewLeadComponent } from './bdm/bdm-lead-management/create-new-lead/create-new-lead.component';
import { UpdateLeadComponent } from './bdm/bdm-lead-management/update-lead/update-lead.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BdmHomePageComponent,
    BdmCampaignManagementComponent,
    BdmLeadManagementComponent,
    BdmProfileComponent,
    TablefilterPipe,
    AgentHomePageComponent,
    AgentLeadManagementComponent,
    AgentProfileComponent,
    TeamleadHomePageComponent,
    TeamleadEmployeeManagementComponent,
    TeamleadLeadManagementComponent,
    TeamleadLeadProfileComponent,
    UpdateEmployeeComponent,
    BdmEmployeeManagementComponent,
    CreateEmployeeComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,
    CreateNewCampaignComponent,
    CreateNewLeadComponent,
    UpdateLeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:JwtAuthService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
