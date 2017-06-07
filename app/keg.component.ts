


<div *ngFor='let currentKeg of childKegList | stock:"safeStock"'>
  <p>{{currentKeg.name}}, {{currentKeg.brand}} Pints: {{currentKeg.pints}}</p>
  <button class="btn btn-default" (click)="editKeg(currentKeg)">Edit Keg</button> <button class='btn btn-success' (click)="sellPint(currentKeg)">Sell Pint</button>
</div>
