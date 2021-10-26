
import {Day} from '../model/day.model'

export class Schedule{

    doctor_id:number;
    monday:Day;
    tuesday: Day;
    wednesday:Day;
    thursday:Day;
    friday:Day;


    constructor(obj?:any) {
        this.doctor_id = obj && obj.doctor_id || 0;
        this.monday = obj && new Day(obj.monday) 
         || new Day();
         this.tuesday = obj && new Day(obj.tuesday) 
         || new Day();
         this.wednesday = obj && new Day(obj.wednesday) 
         || new Day();
         this.thursday = obj && new Day(obj.thursday) 
         || new Day();
         this.friday = obj && new Day(obj.friday) 
         || new Day();
    }
}