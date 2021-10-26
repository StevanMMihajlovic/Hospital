import { Component, Input, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { DoctorDetails } from 'src/app/model/doctor-details.model';


@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  doctorDetails:DoctorDetails;
  doctorId:number;
  @Input() isAppointment:boolean = false;


  constructor(private service:DoctorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.doctorId = params['id']

      this.getDoctorDetails();
    
    })
  }

  getDoctorDetails() {
    this.service.getDoctorDetails(this.doctorId).subscribe(result => {
      this.doctorDetails = result;
      
    })

}
}
