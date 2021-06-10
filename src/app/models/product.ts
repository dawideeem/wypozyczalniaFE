export class Product {
    id: number;
    name: string;
    city: string;
    gearbox: string;
    doors: string;
    fuel: string;
    people: string;
    condition: string;
    price: number;
    imageUrl: string;

    constructor(id=0, name='',city='', gearbox='',doors='',fuel='',people='',condition='', price=0, imageUrl=''){
        this.id=id
        this.name=name
        this.city=city
        this.gearbox=gearbox
        this.doors=doors
        this.fuel=fuel
        this.people=people
        this.condition=condition
        this.price=price
        this.imageUrl=imageUrl
    }
}