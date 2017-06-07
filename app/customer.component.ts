import { Component, Input } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'customer',
  template: `
  <h3>Customer Side</h3>
  <table class='table'>
    <thead>
      <tr>
        <th (click)="sortByName()">Name</th>
        <th (click)="sortByBrand()">Brand</th>
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

  sortByName(){
    this.childKegList.sort(function(keg1, keg2){
      if(keg1.name.toLowerCase() < keg2.name.toLowerCase()) return -1;
      if(keg1.name.toLowerCase() > keg2.name.toLowerCase()) return 1;
      else return 0;
    })
  }

  sortByBrand(){
    this.childKegList.sort(function(a, b){
      if(a.brand.toLowerCase() < b.brand.toLowerCase()) return -1;
      if(a.brand.toLowerCase() > b.brand.toLowerCase()) return 1;
      else return 0;
    })
  }

  sortByPrice(){
    this.childKegList.sort(function(a, b){
      if(a.price < b.price) return -1;
      if(a.price > b.price) return 1;
      else return 0;
    })
  }

  sortByPints(){
    this.childKegList.sort(function(a, b){
      if(a.pints < b.pints) return -1;
      if(a.pints > b.pints) return 1;
      else return 0;
    })
  }

}
