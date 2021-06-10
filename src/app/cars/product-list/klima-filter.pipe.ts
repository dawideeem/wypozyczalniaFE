import { Pipe, PipeTransform } from '@angular/core';
import {Car} from 'src/app/models/car';

@Pipe({
    name: 'klimaFilter'
})

export class KlimaFilterPipe implements PipeTransform{
    transform(products: Car[], searchKlima: any): Car[]{
        if(!products || !searchKlima){
            return products;
        }

        return products.filter(product => 
            product.condition.toLowerCase().indexOf(searchKlima.toLowerCase())!==-1);
    }
}
