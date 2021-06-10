import { Pipe, PipeTransform } from '@angular/core';
import {Car} from 'src/app/models/car';

@Pipe({
    name: 'fuelFilter'
})

export class FuelFilterPipe implements PipeTransform{
    transform(products: Car[], searchFuel: any): Car[]{
        if(!products || !searchFuel){
            return products;
        }

        return products.filter(product => 
            product.fuel.toLowerCase().indexOf(searchFuel.toLowerCase())!==-1);
    }
}
