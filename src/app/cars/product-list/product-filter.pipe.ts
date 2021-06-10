import { Pipe, PipeTransform } from '@angular/core';
import {Car} from 'src/app/models/car';

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform{
    transform(products: Car[], searchTerm: any): Car[]{
        if(!products || !searchTerm){
            return products;
        }

        return products.filter(product => 
            product.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
}
