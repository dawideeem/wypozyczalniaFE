import { Pipe, PipeTransform } from '@angular/core';
import { Rents } from 'src/app/models/rents';

@Pipe({
    name: 'cityFilter'
})

export class CityFilterPipe implements PipeTransform{
    transform(rents: Rents[], searchTerm: any): Rents[]{
        if(!rents || !searchTerm){
            return rents;
        }

        return rents.filter(rents => 
            rents.cityRent.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
}
