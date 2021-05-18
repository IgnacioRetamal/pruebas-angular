import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HijoComponent } from './componente-hijo/hijo.component';
import { PadreComponent } from './componente-padre/padre.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ AppComponent, PadreComponent, HijoComponent ],
  imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule, MatButtonModule ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
