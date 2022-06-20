import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule} from '../material/material.module';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { C3Component } from './c3/c3.component'

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    NavbarComponent, 
    C3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 