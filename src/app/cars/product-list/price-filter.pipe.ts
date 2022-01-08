import { Pipe, PipeTransform } from "@angular/core";
import { Car } from "src/app/models/car";

@Pipe({
    name: 'priceFilter'
})

export class PriceFilterPipe implements PipeTransform{
    transform(products: Car[], searchMinPrice: number, searchMaxPrice: number): Car[]{
        if(!products || !searchMinPrice || !searchMaxPrice){
            return products;
        }

        return products.filter((product) => {
            return product.price>=searchMinPrice && product.price<=searchMaxPrice;
    })
    
    }}