import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { AppointmentComponent } from './appointment/appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SidebarComponent,
    DoctorsComponent,
    DoctorDetailsComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
