import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
mudar: any
variar: any

  ngOnInit() {}
  credenciar(){
   
    this.variar = Math.floor(Math.random() * 749074);
    this.mudar = Math.floor(Math.random() * 1569);
    this.mudar = this.mudar - this.variar;
    var pedro =localStorage.setItem(this.variar, this.mudar)
    alert(pedro)
    


    alert(`Suas credenciais são: id patrulheiro: ${this.variar} e o coódigo da missão é: ${this.mudar} `)

  }
  logar() {
    var not = document.getElementById('notificar');
    var email: any = document.getElementById('email');
    var senha: any = document.getElementById('senha');
    if (email.value.length == 0 && senha.valueOf.length == 0) {
      not.innerHTML = 'Eii patrulheiro você não preencheu os dados';
      not.style.color = 'red';
    } else if (email.value.length == 0) {
      not.innerHTML = 'Eii patrulheiro você não preencheu o id patrulheiro';
      not.style.color = 'red';
    } else if (senha.value.length == 0) {
      not.innerHTML =
        'Eii patrulheiro você não preencheu o seu código da missão';
      not.style.color = 'red';
    } else {
      if (email.value == this.variar) {
        not.innerHTML = 'Eii patrulheiro você acertou o id patrulheiro';
        not.style.color = 'green';
        location.href = "jogar"

        if (senha.value == this.mudar) {
          not.innerHTML =
            'Eii patrulheiro você preencheu as credenciais corretamente';
          not.style.color = 'green';
        } else {
          not.innerHTML = 'Eii patrulheiro você errou o seu código da missão';
          not.style.color = 'red';
        }
      } else {
        not.innerHTML = 'Eii patrulheiro você errou o seu id patrulheiro';
        not.style.color = 'red';
      }
    }
  }
  
}
