

export class Day{

    start:string;
     end:string;

     constructor(obj?:any){

        this.start = obj && obj.start || "";
        this.end = obj && obj.end || "";
     }
}

