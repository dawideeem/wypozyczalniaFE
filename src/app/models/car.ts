export interface Car{
    id?: string;
    name: string;
    city: string;
    gearbox: string;
    doors: string;
    fuel: string;
    people: string;
    condition: string;
    price: number;
    imageUrl: string;
    images: CarImage[];
}

export interface CarImage {
    name: string;
    url: string;
  }