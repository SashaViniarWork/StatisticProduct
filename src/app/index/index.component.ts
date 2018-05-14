import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProductsService} from '../products.service';
import {Product} from '../model/note/note.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  productList: Observable<Product[]>;

  // constructor(private products: ProductsService) {
  //   this.productList = this.products.getProductList()
  //     .snapshotChanges()
  //     .map(
  //       changes => {
  //         return changes.map(c => ({
  //           key: c.payload.key, ...c.payload.val()
  //         }))
  //       });
  // }
  constructor(private products: ProductsService, public router: Router) {
    this.productList = this.products.getProductList()
      .snapshotChanges()
      .map(
        changes => {
          console.log(changes);
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        });
  }

  navEdit(key, product) {
    localStorage.setItem('name', product.name);
    localStorage.setItem('price', product.price);
    localStorage.setItem('key', product.key);
    this.router.navigate(['/edit', key]);
  }

  ngOnInit() {
  }

}
