import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ProperityTypeComponent } from './pages/properity-type/properity-type.component';
import { ProperityComponent } from './pages/properity/properity.component';
import { BookingComponent } from './pages/booking/booking.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SitesComponent } from './pages/sites/sites.component';
import { CustDetailsComponent } from './pages/cust-details/cust-details.component';
import { MastersComponent } from './pages/masters/masters.component';
import firebase from 'firebase/compat/app';
import { ViewSiteComponent } from './pages/view-site/view-site.component';
import { EditSiteComponent } from './pages/edit-site/edit-site.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    ProperityTypeComponent,
    ProperityComponent,
    BookingComponent,
    HomeComponent,
    DashboardComponent,
    SitesComponent,
    CustDetailsComponent,
    MastersComponent,
    ViewSiteComponent,
    EditSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
