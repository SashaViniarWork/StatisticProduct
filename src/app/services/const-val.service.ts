import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {ConstModel} from '../model/const/const.model';

@Injectable()
export class ConstValService {
  private ConstListRef;

  constructor(private db: AngularFireDatabase) {
    this.ConstListRef = this.db.list<ConstModel>('ConstList-list' + localStorage.getItem('uid'));
  }
  getConstList() {
    return this.ConstListRef;
  }

  addConst(val: ConstModel) {
    return this.ConstListRef.push(val);
  }
  updateConst(val: ConstModel) {
    console.log(val.key);
    return this.ConstListRef.update(val.key, val);
  }

  removeConst(val: ConstModel) {
    return this.ConstListRef.remove(val.key);
  }
}
