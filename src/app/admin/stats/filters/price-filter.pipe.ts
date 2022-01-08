import { Pipe, PipeTransform } from "@angular/core";
import { Rents } from "src/app/models/rents";

@Pipe({
    name: 'priceFilter'
})

export class PriceFilterPipe implements PipeTransform{
    transform(rents: Rents[], searchMinPrice: number, searchMaxPrice: number): Rents[]{
        if(!rents || !searchMinPrice || !searchMaxPrice){
            return rents;
        }

        return rents.filter((rents) => {
            return rents.price>=searchMinPrice && rents.price<=searchMaxPrice;
    })
    
    }}