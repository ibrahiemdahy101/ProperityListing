import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProperityTypeComponent } from './pages/properity-type/properity-type.component';
import { SitesComponent } from './pages/sites/sites.component';
import {CustDetailsComponent} from './pages/cust-details/cust-details.component'
import { MastersComponent } from './pages/masters/masters.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewSiteComponent } from './pages/view-site/view-site.component';
import { EditSiteComponent } from './pages/edit-site/edit-site.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'properityType', component: ProperityTypeComponent },
      { path: 'site-master', component: SitesComponent },
      { path: 'customer/:id', component: CustDetailsComponent },
      { path: 'PropMaster', component: MastersComponent },
      { path: 'site/:id', component: ViewSiteComponent },
      { path: 'editsite/:id', component: EditSiteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
