import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/note/note.model';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ConstModel} from '../../model/const/const.model';
import {ConstValService} from '../../services/const-val.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  productList: Observable<Product[]>;
  ValConst: Observable<ConstModel[]>;
  total = 0;
  need = 60000;
  inTheArm: any = 0;
  debt: any = 0;

  constructor(private products: ProductsService,
              public router: Router,
              public authService: AuthService,
              private vals: ConstValService) {
    this.ValConst = this.vals.getConstList()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        });
    console.log(this.ValConst);
    this.productList = this.products.getProductList()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        });

    this.productList.subscribe(res => {
      const resp = res;
      this.arm(resp);
    });
  }

  arm(resp) {
    for (let item of resp) {
      if (+item.price < 0) {
        this.debt += +item.price;
      } else {
        this.inTheArm += +item.price;
      }
    }
  }

  logout() {
    this.authService.logout();
    this.clear();
  }

  navEdit(key, product) {
    localStorage.setItem('name', product.name);
    localStorage.setItem('price', product.price);
    localStorage.setItem('key', product.key);
    localStorage.setItem('group', product.group);
    this.router.navigate(['/edit', key]);
  }

  navConst(key, list) {
    localStorage.setItem('total', list.total);
    localStorage.setItem('need', list.need);
    localStorage.setItem('list_key', list.key);
    this.router.navigate(['/change_total', key]);
  }

  ngOnInit() {

  }

  clear() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
