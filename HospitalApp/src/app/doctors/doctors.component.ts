import { Component, OnInit } from '@angular/core';
import {DoctorList} from '../model/doctorList.model';
import {Doctor} from '../model/doctor.model';
import { DoctorService } from '../services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { DoctorDetails } from '../model/doctor-details.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctorList:DoctorList;
  specialtyList=[];

  doctorId:number;

  doctorDetails:DoctorDetails;

  params = {
    filter: {
      specialty: "",
      name: "",
      lastName: ""
    }
  }


  constructor(private service:DoctorService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.getDoctors();
    this.getSpecialties();

  }


  getDoctors(){
    this.service.getAll(this.params).subscribe (data => {
      this.doctorList = data;
      this.getSpecialties();
    })
  }

  getSpecialties() {
    this.service.getSpecialties().subscribe(result => {
      this.specialtyList = result;
    })
  }

  
}
