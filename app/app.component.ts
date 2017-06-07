import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <h1>Kom<em>boooo</em>cha!</h1>
    <div class="row">
      <div class="col-md-6"><customer [childKegList]="masterKegList"></customer></div>
      <div class="col-md-6"><employee [childKegList]="masterKegList"></employee></div>
    </div>

  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Clear Mind', 'Brew Dr.', 3, 'notes of rosemary and sage'),
    new Keg('Citrus Hops', 'Kombucha Times.', 6, 'notes citrus and hops'),
    new Keg('Ginger Turmeric', 'Brew Dr.', 5, 'notes of ginger and turmeric')
  ];
}
