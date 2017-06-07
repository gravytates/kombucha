import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import { CustomerComponent } from './customer.component';
import { AddKegComponent } from './add-keg.component';
import { EditKegComponent } from './edit-keg.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EmployeeComponent, CustomerComponent, AddKegComponent, EditKegComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
