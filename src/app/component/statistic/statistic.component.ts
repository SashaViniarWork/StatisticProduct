import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/note/note.model';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  // productList: Observable<Product[]>;
  // public lineChartData: Array<any> = [
  //   {data: [0], label: 'Food'},
  //   {data: [0], label: 'Alcohol'},
  //   {data: [0], label: 'Cigarettes'},
  //   {data: [0], label: 'Rent'},
  //   {data: [0], label: 'Dress'},
  //   {data: [0], label: 'Present'}
  // ];
  //
  // constructor(private products: ProductsService) {
  //   this.productList = this.products.getProductList()
  //     .snapshotChanges()
  //     .map(
  //       changes => {
  //         return changes.map(c => (
  //           {
  //             key: c.payload.key, ...c.payload.val()
  //           }
  //         ));
  //       });
  // }
  //
  //
  // public lineChartLabels: Array<any> = ['category1', 'category12', 'category13'];
  // public lineChartOptions: any = {
  //   responsive: true
  // };
  // public lineChartColors: Array<any> = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }
  // ];
  // public lineChartLegend: boolean = true;
  // public lineChartType: string = 'line';
  //
  ngOnInit() {
    // let iteration = 0;
    // for (let item of this.productList) {
    //   this.lineChartData[iteration].data.push(item.price);
    //   this.lineChartData[iteration].label.push(item.group);
    // }

  }
}
