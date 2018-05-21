import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ConstModel} from '../../model/const/const.model';
import {ConstValService} from '../../services/const-val.service';

@Component({
  selector: 'app-add-const-users',
  templateUrl: './add-const-users.component.html',
  styleUrls: ['./add-const-users.component.css']
})
export class AddConstUsersComponent implements OnInit {
  val: ConstModel = {
    total: '',
    need: '',
    uid: localStorage.getItem('uid')
  };

  constructor(public router: Router, private vals: ConstValService) {

  }

  ngOnInit() {
  }

  addM(val: ConstModel) {
    if (this.val.total === '' || this.val.total === null || this.val.need === '' || this.val.need === null) {
      alert('Please Fill total and need');
    } else {
      this.vals.addConst(val).then(ref => {
        this.router.navigate(['/home']);
      });
    }
  }
}
