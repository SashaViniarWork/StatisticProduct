import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product} from '../model/note/note.model';
@Injectable()
export class ProductsService {
  private ProductListRef;
  constructor(private db: AngularFireDatabase) {
    this.ProductListRef = this.db.list<Product>('Product-list' + localStorage.getItem('uid'));
  }
  getProductList() {
    return this.ProductListRef;
  }

  addProduct(product: Product) {
    return this.ProductListRef.push(product);
  }
  updateProduct(product: Product) {
    console.log(product.key);
    return this.ProductListRef.update(product.key, product);
  }

  removeProduct(product: Product) {
    return this.ProductListRef.remove(product.key);
  }

}
