import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProductsService} from '../products.service';
import {Product} from '../model/note/note.model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product: Product = {
    name: '',
    price: ''
  };
  constructor(private products: ProductsService, private  router: Router) {

  }
  ngOnInit() {
  }

  addNote(product: Product) {
    this.products.addProduct(product).then(ref => {
      this.router.navigate(['/home']);
    });
  }
}
