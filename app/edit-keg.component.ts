import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <h3>Edit {{selectedKeg.name}} Keg</h3>
  <div>
    <label>Name:</label>
    <input [(ngModel)]="selectedKeg.name"><br>

    <label>Brand:</label>
    <input [(ngModel)]="selectedKeg.brand"><br>

    <label>Price:</label>
    <input type="number" [(ngModel)]="selectedKeg.price"><br>

    <label>Flavor profile:</label>
    <input [(ngModel)]="selectedKeg.flavor">
  </div>
  <br>
  <button class="btn btn-default" (click)="finishedEditing()">Done</button>
  `
})

export class EditKegComponent {
  @Input() selectedKeg: Keg;
  @Output() finishedEditingSender = new EventEmitter();

  finishedEditing(){
    this.finishedEditingSender.emit();
  }
}
