import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/note/note.model';
import {Router} from '@angular/router';
import {ConstValService} from '../../services/const-val.service';
import { ConstModel} from '../../model/const/const.model';
@Component({
  selector: 'app-change-total',
  templateUrl: './change-total.component.html',
  styleUrls: ['./change-total.component.css']
})
export class ChangeTotalComponent implements OnInit {
  val: ConstModel = {
    total: '',
    need: '',
    uid: localStorage.getItem('uid')
  };

  constructor(private vals: ConstValService, private  router: Router) {
    this.val.total = localStorage.getItem('total');
    this.val.need = localStorage.getItem('need');
    this.val.key = localStorage.getItem('list_key');
  }

  ngOnInit() {
  }

  updateProduct(vals: ConstModel) {
    this.vals.updateConst(vals).then(() => {
      this.router.navigate(['/home']);
    });
  }

}
