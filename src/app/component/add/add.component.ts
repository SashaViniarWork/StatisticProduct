import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/note/note.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product: Product = {
    name: '',
    price: '',
    group: '',
    uid: localStorage.getItem('uid')
  };
  addmoney: any = '';

  constructor(private products: ProductsService, private  router: Router) {

  }

  ngOnInit() {
  }

  addNote(product: Product) {

    if (this.product.price === '' || this.product.price === null || this.product.name === '' || this.product.name === null) {
      alert('Price or Name Null');
    } else {
      this.products.addProduct(product).then(ref => {
        this.router.navigate(['/home']);
      });
    }

  }
}
