import { Component, OnInit } from '@angular/core';
import { RouterEvent, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-inicio2',
  templateUrl: './inicio2.component.html',
  styleUrls: ['./inicio2.component.css'],
})
export class Inicio2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
  jogar() {
    alert('Já vamos iniciar! =)');
  }

  numero: any;
  logar() {
  
  }

}
