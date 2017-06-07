import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'employee',
  template: `
  <h3>Employee Side</h3>
  <hr>
  <p>New Keg Form</p>
  <hr>
  <p *ngFor='let currentKeg of childKegList'>
    {{currentKeg.name}}, {{currentKeg.brand}} Pints: {{currentKeg.pints}} 
  </p>
  `
})

export class EmployeeComponent {
  @Input() childKegList: Keg[];
}
