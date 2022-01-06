import { Pipe, PipeTransform } from '@angular/core';
import { Rents } from 'src/app/models/rents';

@Pipe({
    name: 'carFilter'
})

export class CarFilterPipe implements PipeTransform{
    transform(rents: Rents[], searchTerm: any): Rents[]{
        if(!rents || !searchTerm){
            return rents;
        }

        return rents.filter(rents => 
            rents.carRent.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
}
