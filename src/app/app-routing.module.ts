import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { BdmHomePageComponent } from './bdm/bdm-home-page/bdm-home-page.component';
import { BdmProfileComponent } from './bdm/bdm-profile/bdm-profile.component';
import { AuthorizationGuard } from './_helpers/authorization.guard';
import { AgentLeadManagementComponent } from './agent/agent-lead-management/agent-lead-management.component';
import { AgentProfileComponent } from './agent/agent-profile/agent-profile.component';
import { AgentHomePageComponent } from './agent/agent-home-page/agent-home-page.component';
import { Role } from './_models/role';
import { TeamleadHomePageComponent } from './teamlead/teamlead-home-page/teamlead-home-page.component';
import { TeamleadEmployeeManagementComponent } from './teamlead/teamlead-employee-management/teamlead-employee-management.component';
import { TeamleadLeadManagementComponent } from './teamlead/teamlead-lead-management/teamlead-lead-management.component';
import { TeamleadLeadProfileComponent } from './teamlead/teamlead-lead-profile/teamlead-lead-profile.component';
import { BdmEmployeeManagementComponent } from './bdm/bdm-employee-management/bdm-employee-management/bdm-employee-management.component';
import { CreateEmployeeComponent } from './bdm/bdm-employee-management/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './bdm/bdm-employee-management/update-employee/update-employee.component';
import { GetEmployeesService } from './_services/get-employees.service';
import { CreateEmployeeCanDeactivateService } from './_helpers/create-employee-can-deactivate-guard.service';
import { CreateNewCampaignComponent } from './bdm/bdm-campaign-management/create-new-campaign/create-new-campaign.component';
import { BdmCampaignManagementComponent } from './bdm/bdm-campaign-management/bdm-campaign-management/bdm-campaign-management.component';
import { BdmLeadManagementComponent } from './bdm/bdm-lead-management/bdm-lead-management/bdm-lead-management.component';
import { CreateNewLeadComponent } from './bdm/bdm-lead-management/create-new-lead/create-new-lead.component';
import { UpdateLeadComponent } from './bdm/bdm-lead-management/update-lead/update-lead.component';
import { GetLeadsService } from './_services/get-leads.service';


const routes: Routes = [
  {path: 'lead-portal', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'agent/homePage', component: AgentHomePageComponent,canActivate: [AuthorizationGuard],data:{roles : Role.AGENT}},
  {path: 'agent/leadManagement', component: AgentLeadManagementComponent,canActivate: [AuthorizationGuard],data:{roles : Role.AGENT}},
  {path: 'agent/profile', component: AgentProfileComponent,canActivate: [AuthorizationGuard],data:{roles : Role.AGENT}},
  
  {path: 'teamlead/homePage', component: TeamleadHomePageComponent,canActivate: [AuthorizationGuard],data:{roles : Role.TEAMLEADER}},
  {path: 'teamlead/employeeManagement', component: TeamleadEmployeeManagementComponent,canActivate: [AuthorizationGuard],data:{roles : Role.TEAMLEADER}},
  {path: 'teamlead/leadManagement', component: TeamleadLeadManagementComponent,canActivate: [AuthorizationGuard],data:{roles : Role.TEAMLEADER}},
  {path: 'teamlead/profile', component: TeamleadLeadProfileComponent,canActivate: [AuthorizationGuard],data:{roles : Role.TEAMLEADER}},
  
  {path: 'bdm/homePage', component: BdmHomePageComponent,canActivate: [AuthorizationGuard],data:{roles : Role.BDM}},
  {path: 'bdm/employeeManagement', component: BdmEmployeeManagementComponent,canActivate: [AuthorizationGuard],data:{roles : Role.BDM}, resolve: {employees : GetEmployeesService}},
  {path: 'bdm/employeeManagement/createEmployee', component: CreateEmployeeComponent,canActivate: [AuthorizationGuard],data:{roles : Role.BDM}, canDeactivate : [CreateEmployeeCanDeactivateService]},
  {path: 'bdm/employeeManagement/updateEmployee/:employeeId', component: UpdateEmployeeComponent,canActivate: [AuthorizationGuard],data:{roles : Role.BDM}},
  {path: 'bdm/leadManagement', component: BdmLeadManagementComponent,canActivate: [AuthorizationGuard],data:{roles : Role.BDM}, resolve: {leads : GetLeadsService}},
  {path: 'bdm/leadManagement/createLead', component: CreateNewLeadComponent,canActivate: [AuthorizationGuard],data:{roles : Role.BDM}},
  {path: 'bdm/leadManagement/updateLead/:leadId', component: UpdateLeadComponent,canActivate: [AuthorizationGuard],data:{roles : Role.BDM}},
  {path: 'bdm/campaignManagement', component: BdmCampaignManagementComponent,canActivate: [AuthorizationGuard],data:{roles : Role.BDM}},
  {path: 'bdm/campaignManagement/createCampaign', component: CreateNewCampaignComponent,canActivate: [AuthorizationGuard],data:{roles : Role.BDM}},
  {path: 'bdm/profile', component: BdmProfileComponent,canActivate: [AuthorizationGuard],data:{roles : Role.BDM}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }