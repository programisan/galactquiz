import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { JogoComponent } from './jogo/jogo.component';
import { Inicio2Component } from './inicio2/inicio2.component';
import { LoginComponent } from './login/login.component';
import { InicioverdComponent } from '../inicioverd/inicioverd.component';

const APP_ROUTES: Routes = [
  { path: '', component: JogoComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'logar', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jogar', component: InicioverdComponent },
  { path: '**', component: JogoComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
