import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/note/note.model';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  productList: Observable<Product[]>;
  total;
  need = 60000;

  constructor(private products: ProductsService, public router: Router, public authService: AuthService) {
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

  logout() {
    this.authService.logout();
    this.clear();
  }

  navEdit(key, product) {
    localStorage.setItem('name', product.name);
    localStorage.setItem('price', product.price);
    localStorage.setItem('key', product.key);
    this.router.navigate(['/edit', key]);
  }

  ngOnInit() {
    this.total = localStorage.getItem('add');
  }

  clear() {
    localStorage.removeItem('uid');
  }
}
