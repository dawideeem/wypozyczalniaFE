import { Pipe, PipeTransform } from "@angular/core";
import { Car } from "src/app/models/car";

@Pipe({
    name: 'peopleFilter'
})

export class PeopleFilterPipe implements PipeTransform{
    transform(products: Car[], searchPeople: any): Car[]{
        if(!products || !searchPeople){
            return products;
        }

        return products.filter(product => 
            product.people.toLowerCase().indexOf(searchPeople.toLowerCase())!==-1);
    }
    
    }