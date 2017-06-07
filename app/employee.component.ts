import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'employee',
  template: `
  <h3>Employee Side</h3>
  <hr>
  <add-keg (addNewKeg)="addKeg($event)"></add-keg>
  <hr>
  <h3 id="danger-zone"><em>Danger Zone</em></h3>
  <div class="row">
    <div class="col-md-6">
      <div *ngFor='let currentKeg of childKegList | stock:"dangerZone"'>
        <p>{{currentKeg.name}}, {{currentKeg.brand}} Pints: {{currentKeg.pints}}</p>
        <button class="btn btn-default" (click)="editKeg(currentKeg)">Edit Keg</button> <button class='btn btn-danger' (click)="sellPint(currentKeg)">Sell Pint</button>
      </div>
      <hr>
      <div *ngFor='let currentKeg of childKegList | stock:"safeStock"'>
        <p>{{currentKeg.name}}, {{currentKeg.brand}} Pints: {{currentKeg.pints}}</p>
        <button class="btn btn-default" (click)="editKeg(currentKeg)">Edit Keg</button> <button class='btn btn-success' (click)="sellPint(currentKeg)">Sell Pint</button>
      </div>
      <hr>
      <h3>Empty Kegs</h3>
      <div *ngFor='let currentKeg of childKegList | stock:"emptyKegs"'>
        <p>{{currentKeg.name}}, {{currentKeg.brand}} Pints: {{currentKeg.pints}}</p>
        <button class="btn btn-default" (click)="editKeg(currentKeg)">Edit Keg</button> <button class='btn btn-warning' (click)="restockKeg(currentKeg)">Restock Keg</button>
      </div>

    </div>

    <div class="col-md-6">
      <div *ngIf="selectedKeg">
        <edit-keg [selectedKeg]="selectedKeg" (finishedEditingSender)="finishedEditing()"></edit-keg>
      </div>
    </div>
  `
})

export class EmployeeComponent {
  @Input() childKegList: Keg[];
  @Output() newKegSender = new EventEmitter();
  selectedKeg = null;

  addKeg(newKeg){
    this.childKegList.push(newKeg);
    this.newKegSender.emit(this.childKegList);
  }

  restockKeg(keg){
    keg.pints = 124;
  }

  editKeg(keg){
    this.selectedKeg = keg;
  }

  finishedEditing(){
    this.selectedKeg = null;
  }

  sellPint(keg) {
    keg.pints -= 1;
    this.newKegSender.emit(this.childKegList);
  }
}
