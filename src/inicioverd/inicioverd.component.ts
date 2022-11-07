import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicioverd',
  templateUrl: './inicioverd.component.html',
  styleUrls: ['./inicioverd.component.css'],
})
export class InicioverdComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  cadastrar() {
  localStorage.setItem(nome) = document.getElementById('nome');
   var nome = String(nome.value);
    alert(nome);
  }
}
