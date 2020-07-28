import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'; 
import { reducer } from './reducers/tutorial.reducer';
import { LesenComponent } from './lesen/lesen.component';
import { SchreibenComponent } from './schreiben/schreiben.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LesenComponent,
    SchreibenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ 
      tutorial: reducer 
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
