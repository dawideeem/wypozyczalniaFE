import { Injectable } from '@angular/core';
import { Product } from '../models/product'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

products: Product[] = [
  new Product(1, 'Nissan Micra','Kraków', 'skrzynia manualna','5 drzwi','benzyna','5 osobowy', 'klimatyzacja', 90, 'https://kaizenrent.pl/ic/upload/wysiwyg/zdjecia%20aut/nissan_micra_kaizen.jpg?widthMax=800&heightMax=600'),
  new Product(2, 'Opel Corsa','Warszawa', 'skrzynia manualna','5 drzwi','benzyna','5 osobowy', 'klimatyzacja', 90, 'https://kaizenrent.pl/ic/upload/wysiwyg/klasa_A_wypozyczalnia_kaizen_rent.png?widthMax=800&heightMax=600'),
  new Product(3, 'Toyota Yaris','Kraków', 'skrzynia manualna','5 drzwi','benzyna','5 osobowy', 'klimatyzacja', 95, 'https://kaizenrent.pl/ic/upload/wysiwyg/zdjecia%20aut/yaris_m_kaizen.jpg?widthMax=800&heightMax=600'),
  new Product(4, 'Nissan Qashqai','Warszawa', 'skrzynia manualna','5 drzwi','benzyna','5 osobowy', 'klimatyzacja', 110, 'https://kaizenrent.pl/ic/upload/wysiwyg/zdjecia%20aut/nissan_qashqai_kaizen_rent.png?widthMax=800&heightMax=600'),
  new Product(5, 'Toyota Avensis','Kraków', 'skrzynia manualna','5 drzwi','benzyna','5 osobowy', 'klimatyzacja', 110, 'https://kaizenrent.pl/ic/upload/wysiwyg/zdjecia%20aut/toyota_avensis_kaizenfleet.jpg?widthMax=800&heightMax=600'),
  new Product(6, 'Seat Leon ST','Warszawa', 'skrzynia manualna','5 drzwi','benzyna','5 osobowy', 'klimatyzacja', 120, 'https://kaizenrent.pl/ic/upload/wysiwyg/wypozyczalnia_slider_seat_leaon_ST_600_450.png?widthMax=800&heightMax=600')

]

  constructor() { }

  getProducts():Product[]{
    return this.products
  }
}
