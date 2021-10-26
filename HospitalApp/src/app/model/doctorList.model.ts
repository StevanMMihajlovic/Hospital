

import {Doctor} from './doctor.model';

export class DoctorList {
    count: number;
    results: Doctor[];

    constructor(obj?:any) {
        this.count = obj && obj.count || 0;

        this.results = obj && obj.results && obj.results.map((x:any) => {
            return new Doctor(x);
        }) || new Array<Doctor>();
    }
}