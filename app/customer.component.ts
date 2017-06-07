import { Component, Input } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'customer',
  template: `
  <h3>Customer Side</h3>
  <table class='table'>
    <thead>
      <tr>
        <th (click)="sortAlpha('name')">Name</th>
        <th (click)="sortAlpha('brand')">Brand</th>
        <th (click)="sortByPrice()">Price</th>
        <th>Flavor</th>
        <th (click)="sortByPints()">Remaining Pints</th>
      </tr>
    </thead>
    <tbody>
  <tr *ngFor='let currentKeg of childKegList'>

    <td>{{currentKeg.name}}</td>
    <td>{{currentKeg.brand}}</td>
    <td>{{currentKeg.price}}</td>
    <td>{{currentKeg.flavor}}</td>
    <td>{{currentKeg.pints}}</td>
  </tr>
  </tbody>
  </table>
  `
})

export class CustomerComponent {
  @Input() childKegList: Keg[];

  sortAlpha(property){
    this.childKegList.sort(function(a, b){
      if(a[`${property}`].toLowerCase() < b[`${property}`].toLowerCase()) return -1;
      if(a[`${property}`].toLowerCase() > b[`${property}`].toLowerCase()) return 1;
      else return 0;
    })
  }

  sortNumeric(property){
    this.childKegList.sort(function(a,b){
      return a[`${property}`] - b[`${property}`];
    })
  }
}
