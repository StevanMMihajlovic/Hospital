

export class Doctor{

    _id:1
    name:string
    lastName:string
    specialty:string
    age:number

    constructor(obj?:any){

        this._id = obj && obj._id || 0;
        this.name = obj && obj.name || "";
        this.lastName = obj && obj.lastName || "";
        this.specialty = obj && obj.specialty || "";
        this.age = obj && obj.age || 0;
    }


}