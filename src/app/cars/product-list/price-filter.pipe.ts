import { Pipe, PipeTransform } from "@angular/core";
import { Car } from "src/app/models/car";

@Pipe({
    name: 'priceFilter'
})

export class PriceFilterPipe implements PipeTransform{
    transform(products: Car[], searchPrice: number): Car[]{
        if(!products || !searchPrice){
            return products;
        }

        return products.filter((product) => {
            return product.price<=searchPrice;
    })
    
    }}