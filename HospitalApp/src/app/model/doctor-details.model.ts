
import {Schedule} from './schedule.model';

export class DoctorDetails{

    _id:number
   name:string
   lastName:string
   specialty:string
   age:number
   schedule:Schedule;

   constructor(obj?:any) {
       this._id = obj && obj._id || 0;
       this.name = obj && obj.name || '';
       this.lastName = obj && obj.lastName || '';
       this.specialty = obj && obj.specialty || '';
       this.age = obj && obj.age || 0;
       this.schedule = obj && new Schedule(obj.schedule) 
         || new Schedule();

   }
}