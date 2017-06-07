import { Component, Input } from '@angular/core';
import { Keg } from './keg.model'


// TODO: add toggled arrows for sorting, similar to to-do
@Component({
  selector: 'customer',
  template: `
  <h3>Customer Side</h3>
  <table class='table'>
    <thead>
      <tr>
        <th>
          Name
          <span (click)="sortAlpha('name', 1)">&#9650;</span>
          <span (click)="sortAlpha('name', -1)">&#9660;</span>
        </th>
        <th>
          Brand
          <span (click)="sortAlpha('brand', 1)">&#9650;</span>
          <span (click)="sortAlpha('brand', -1)">&#9660;</span>
        </th>
        <th>
        Price
        <span (click)="sortNumeric('price', 1)">&#9650;</span>
        <span (click)="sortNumeric('price', -1)">&#9660;</span>
        </th>
        <th>Flavor</th>
        <th> Remaining Pints<span (click)="sortNumeric('pints', 1)">&#9650;</span><span (click)="sortNumeric('pints', -1)">&#9660;</span></th>
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

  sortAlpha(property, sign){
    this.childKegList.sort(function(a, b){
      if(a[`${property}`].toLowerCase() < b[`${property}`].toLowerCase()) return -1*sign;
      if(a[`${property}`].toLowerCase() > b[`${property}`].toLowerCase()) return 1*sign;
      else return 0;
    })
  }

  sortNumeric(property, sign){
    this.childKegList.sort(function(a,b){
      return (a[`${property}`] - b[`${property}`])*sign;
    })
  }
}
