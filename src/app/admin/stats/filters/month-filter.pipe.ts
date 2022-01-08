import { Pipe, PipeTransform } from '@angular/core';
import { Rents } from 'src/app/models/rents';

@Pipe({
    name: 'monthFilter'
})

export class MonthFilterPipe implements PipeTransform{
    dt!: Date;
    transform(rents: Rents[], searchTerm: any): Rents[]{
        if(!rents || !searchTerm){
            return rents;
        }

        return rents.filter((rents) => {
           this.dt=new Date(rents.startDate);
          return (this.dt.getFullYear()+'-'+((this.dt.getMonth() + 1).toString().length > 1 ? this.dt.getMonth() + 1 : '0' + (this.dt.getMonth() + 1)))==searchTerm;
        })
    }}
