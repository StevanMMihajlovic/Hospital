import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Appointment} from '../model/appointment.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DoctorService} from 'src/app/services/doctor.service'


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {



  time= {hour: 12, minute: 30};
  date= {year: 2021, month: 7, day: 10};
  doctorId=1;

  newAppointment:Appointment = new Appointment();

  constructor(private route: ActivatedRoute, private service:DoctorService, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.doctorId = params['id']
    
    })
  }


saveAppointment(){
  this.newAppointment.doctorId = this.doctorId;
  this.newAppointment.day.day = this.date.day;
  this.newAppointment.day.month = this.date.month;
  this.newAppointment.day.year = this.date.year;
  this.newAppointment.hour.hour = this.time.hour;
  this.newAppointment.hour.minute = this.time.minute;

  this.service.postAppointment(this.newAppointment).subscribe((data: any) => {
      alert("Successfull appointment!");
    });
    this.router.navigate(['/doctors'])

  
}



}



