import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from './components/primercomponents/primer.component';
import { HooksAngular } from './components/hooksangular/hooksangular.component';
import { DeportesComponent } from './components/deportes/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormsbindingComponent } from './components/formsbinding/formsbinding.component';
import { SumarnumerosComponent } from './components/sumarnumeros/sumarnumeros.component';
import { TablamultiplicarComponent } from './components/tablamultiplicar/tablamultiplicar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    FormsbindingComponent,
    SumarnumerosComponent,
    TablamultiplicarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
