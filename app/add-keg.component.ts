import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'add-keg',
  template: `
  <h3>Add Kombucha Keg</h3>
  <div>
    <label>Name:</label>
    <input #name>

    <label>Brand:</label>
    <input #brand>

    <label>Price:</label>
    <input #price>

    <label>Flavor profile:</label>
    <input #flavor>
  </div>
  <button class="btn btn-default"(click)="submitForm(name.value, brand.value, price.value, flavor.value); name.value=''; brand.value=''; price.value=''; flavor.value='';">Add Keg</button>
  `
})

export class AddKegComponent {
  @Output() addNewKeg = new EventEmitter();

  submitForm(name: string, brand: string, price: string, flavor: string) {
    var newKeg: Keg = new Keg(name, brand, parseInt(price,10), flavor);
    this.addNewKeg.emit(newKeg);
  }
}
