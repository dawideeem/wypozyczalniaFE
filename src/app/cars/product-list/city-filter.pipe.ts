import { Pipe, PipeTransform } from '@angular/core';
import {Car} from 'src/app/models/car';

@Pipe({
    name: 'cityFilter'
})

export class CityFilterPipe implements PipeTransform{
    transform(products: Car[], searchCity: any): Car[]{
        if(!products || !searchCity){
            return products;
        }

        return products.filter(product => 
            product.city.toLowerCase().indexOf(searchCity.city.toLowerCase())!==-1)
             
        
    }

}
