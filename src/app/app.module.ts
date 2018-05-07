import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { LineasComponent } from './lineas/lineas.component';
import { BarrasComponent } from './barras/barras.component';
import { DonasComponent } from './donas/donas.component';
import { CirculoComponent } from './circulo/circulo.component';


@NgModule({
  declarations: [
    AppComponent,
    LineasComponent,
    BarrasComponent,
    DonasComponent,
    CirculoComponent
    
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
