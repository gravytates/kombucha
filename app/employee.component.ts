import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'employee',
  template: `
  <h3>Employee Side</h3>
  <hr>
  <add-keg (addNewKeg)="addKeg($event)"></add-keg>
  <hr>
  <p *ngFor='let currentKeg of childKegList'>
    {{currentKeg.name}}, {{currentKeg.brand}} <button class='btn btn-success' (click)="sellPint(currentKeg)">Sell Pint</button>Pints: {{currentKeg.pints}}
  </p>
  `
})

export class EmployeeComponent {
  @Input() childKegList: Keg[];
  @Output() newKegSender = new EventEmitter();

  addKeg(newKeg){
    this.childKegList.push(newKeg);
    this.newKegSender.emit(this.childKegList);
  }

  sellPint(keg) {
    keg.pints -= 1;
    this.newKegSender.emit(this.childKegList);
  }
}
