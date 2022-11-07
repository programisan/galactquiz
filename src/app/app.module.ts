import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JogoComponent } from './jogo/jogo.component';
import { AppRoutingModule } from './app.routing.module';
import { Inicio2Component } from './inicio2/inicio2.component';
import { LoginComponent } from './login/login.component';
import { InicioverdComponent } from '../inicioverd/inicioverd.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, JogoComponent, Inicio2Component, LoginComponent, InicioverdComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
