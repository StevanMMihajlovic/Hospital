

export class Appointment{

    _id:number;
    doctorId:number;
    name:string;
      lastName:string;
      email:string;
      phone:string;
      day:AppointmentDay;
      hour:AppointmentHour;

      constructor(obj?:any) {
          this._id = obj && obj._id || 0;
          this.doctorId = obj && obj.doctorId || 0;
          this.name = obj && obj.name || "";
          this.lastName = obj && obj.lastName || "";
          this.email = obj && obj.email || "";
          this.phone = obj && obj.phone || "";
          this.day = obj && new AppointmentDay(obj.day) 
         || new AppointmentDay();
         this.hour = obj && new AppointmentHour(obj.hour) 
         || new AppointmentHour();


      }

      
}

export class AppointmentDay{
    year: number;
    month: number;
    day: number;

    constructor(obj?:any){
        this.year = obj && obj.year || 0;
        this.month = obj && obj.month || 0;
        this.day = obj && obj.day || 0;
    }
}

export class AppointmentHour{
    hour: number;
    minute: number;
    second: number;
    

    constructor(obj?:any){
        this.hour = obj && obj.hour || 0;
        this.minute = obj && obj.minute || 0;
        this.second = obj && obj.second || 0;
    }
}

