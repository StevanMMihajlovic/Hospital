import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorDetailsComponent} from './doctors/doctor-details/doctor-details.component';
import { AppointmentComponent} from './appointment/appointment.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:"doctors", component: DoctorsComponent, children: [{path:":id",
   component: DoctorDetailsComponent} ]},
  {path:"appointment/:id", component: AppointmentComponent},
   {path:"", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
