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
    var nome: any = document.getElementById('nome');
    nome = String(nome.value).length;
    alert(nome);
  }
}
