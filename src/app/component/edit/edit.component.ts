import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/note/note.model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product = {
    name: '',
    price: '',
    uid: localStorage.getItem('uid')
  };
  constructor(private products: ProductsService, private  router: Router) {
    this.product.name = localStorage.getItem('name');
    this.product.price = localStorage.getItem('price');
    this.product.key = localStorage.getItem('key');


  }
  updateProduct(product: Product) {
    this.products.updateProduct(product).then(() => {
      this.router.navigate(['/home']);
    });
  }

  removeProduct(product: Product) {
    this.products.removeProduct(this.product).then(() => {
      this.router.navigate(['/home']);
    });
  }
  ngOnInit() {
  }

}
