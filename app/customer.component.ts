import { Component, Input } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'customer',
  template: `
  <h3>Customer Side</h3>
  <table class='table'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Flavor</th>
        <th>Remaining Pints</th>
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

}
