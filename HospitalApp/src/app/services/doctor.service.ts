import { Injectable } from '@angular/core';
import {DoctorList} from '../model/doctorList.model';
import {Doctor} from '../model/doctor.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { DoctorDetails } from '../model/doctor-details.model';


const baseUrl = "http://localhost:3000/api/doctors";
const specialtyUrl = "http://localhost:3000/api/specialties";
const appointmentUrl ="http://localhost:3000/api/appointments";


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }


  getAll(params?:any): Observable<DoctorList>{

    let queryParams={};

  if(params){
    queryParams = {
      params: new HttpParams()
      .set("filter", params.filter && JSON.stringify(params.filter) || "")
    }
  }

    return this.http.get(baseUrl, queryParams).pipe(map(response => {
        return new DoctorList(response);
      }));
}


getSpecialties(): Observable<string[]> {
  return this.http.get(specialtyUrl).pipe(map(response => {
    return response as string[];
  }))
}

getDoctorDetails(id:number): Observable<DoctorDetails> {

  return this.http.get(`${baseUrl}/${id}`).pipe(map(response =>
    { return new DoctorDetails(response)}));
}

postAppointment(data: any): Observable<any> {
  return this.http.post(appointmentUrl, data);
}
}
