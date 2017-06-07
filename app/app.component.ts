import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Kombucha Boyz</h1>
    <div class="row">
      <div class="col-md-6"><customer></customer></div>
      <div class="col-md-6"><employee [childKegList]="masterKegList"></employee></div>
    </div>

  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Citrus Hops', 'Brew Dr.', 5, 'notes citrus and hops'),
    new Keg('Clear Mind', 'Brew Dr.', 5, 'notes of rosemary and sage'),
    new Keg('Ginger Turmeric', 'Brew Dr.', 5, 'notes of ginger and turmeric')
  ];
}
