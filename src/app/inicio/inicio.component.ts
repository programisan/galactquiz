import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  conferir() {
    var alt: any = document.getElementsByName('alt');
    if (alt[1].checked) {
      var Alt2: any = document.getElementById('errado');
      var feed: any = document.getElementById('feed');
      Alt2.style.color = 'red';
      var ponto: number = 0;
      var saud: any = document.getElementById('saud');

      var saudcelular: any = document.getElementById('saud-celular');
      saudcelular.innerHTML = 'Você errou!';
      saudcelular.style.color = 'red';
      saud.innerHTML = 'Você errou!';
      saud.style.color = 'red';
      var conferir: any = document.getElementById('confere');
      conferir.innerHTML = '';
      feed.innerHTML = '<a>Sortear proxima<a>  <br>';
      var proxima: any = document.getElementById('proxima');

      proxima.innerHtml = 'Sortear proxima';
    } else if (alt[0].checked) {
      var Alt: any = document.getElementById('certo');
      Alt.style.color = 'green';
      var feed: any = document.getElementById('feed');
      var Alt2: any = document.getElementById('errado');
      Alt2.style.color = 'red';
      var ponto = 1;
      var saud: any = document.getElementById('saud');
      saud.innerHTML = 'Você acertou!';
      saud.style.color = 'green';
      var saudcelular: any = document.getElementById('saud-celular');
      saudcelular.innerHTML = 'Você acertou!';
      saudcelular.style.color = 'green';
      var conferir: any = document.getElementById('confere');
      conferir.innerHTML = '';
      feed.innerHTML =
        '<a><br>Sortear proxima<a>  <br> <img id="img" src="https://img.myloview.com.br/posters/grupo-colorido-dos-baloes-do-helio-decoracao-feliz-da-festa-de-anos-multicolorido-cartao-de-aniversario-comemoracao-ilustracao-3d-isolado-em-fundo-preto-700-126495995.jpg"> ';

      var img = document.getElementById('img');
      img.style.transition = '2s';
      img.style.opacity = '30%';
      var proxima: any = document.getElementById('proxima');
      proxima.innerHtml = '<br>Sortear proxima';
    } else {
      var saud: any = document.getElementById('saud');
      saud.innerHTML = 'Selecione uma das alternativas';
      saud.style.color = 'red';
      var saudcelular: any = document.getElementById('saud-celular');
      saudcelular.innerHTML = 'Selecione uma das alternativas';
      saudcelular.style.color = 'red';
    }
  }

  acertou() {}
  errou() {}
  proxima() {
    var saud: any = document.getElementById('saud');
    saud.innerHTML =
      ' Na imensidão da galaxia, em um azul infinito o aprendizado chega';
    var conferir: any = document.getElementById('confere');
    conferir.innerHTML = 'Conferir';
    var saudcelular: any = document.getElementById('saud-celular');
    saudcelular.innerHTML = '';
    saudcelular.style.color = '';
    var feed: any = document.getElementById('feed');
    var pergunta0 = 'Qual o nome da estrela mais antiga do universo?';
    var pergunta1 = 'Quantos anos vive uma estrela?';
    var pergunta2: any = 'Quantos planetas tem o sistema solar?';
    var pergunta3: any = 'Qual é o diâmetro aproximado do sol??';
    var pergunta4: any = 'Quantos anos tem o sistema solar?';
    var pergunta5: any = 'Quantos aneis tem saturno?';
    var pergunta6 =
      'Qual é aproximadamente a masssa do ton 618, em relação ao sol?';
    var pergunta7 = 'O quê pode acontecer depois de uma supermova?';
    var pergunta8: any =
      'A andrômeda vai colidir com nossa galáxia daqui a quantos anos?';
    var pergunta9: any = 'O que vai acontecer quando o sol morrer?';
    var pergunta10: any = 'Qual a estrela mais massiva que existe?';
    var pergunta11: any =
      'É verdade que todos planetas gasosos tem anéis em volta?';
    var perguntas: any = {
      0: pergunta0,
      1: pergunta1,
      2: pergunta2,
      3: pergunta3,
      4: pergunta4,
      5: pergunta5,
      6: pergunta6,
      7: pergunta7,
      8: pergunta8,
      9: pergunta9,
      10: pergunta10,
      11: pergunta11,
    };

    var certo0 = 'Matusalém';
    var certo1 = 'Mais de um bilhão';
    var certo2: any = '8 planetas';
    var certo3: any = '1.392.700 km';
    var certo4: any = 'Certa 5 bilhões';
    var certo5: any = '7 aneis';
    var certo6 = '66 bilhões ';
    var certo7 = 'Criar uma estrela de neutrons ou buraco negro';
    var certo8: any = '4.5 bilhões';
    var certo9: any = 'Virar uma anã branca';
    var certo10: any = 'R136a1';
    var certo11: any = 'Verdadeiro';

    var certas: any = {
      0: certo0,
      1: certo1,
      2: certo2,
      3: certo3,
      4: certo4,
      5: certo5,
      6: certo6,
      7: certo7,
      8: certo8,
      9: certo9,
      10: certo10,
      11: certo11,
    };

    var errado0 = '<p id="errado">Jácala</p>';
    var errado1 = 'Menos de um bilhão';
    var errado2: any = '7 planetas';
    var errado3: any = '1.100.700 km';
    var errado4: any = 'Cerca de 6.5 bilhões';
    var errado5: any = 'Nenhum';
    var errado6 = '54 bilhões';
    var errado7 = 'Capaz de destruir planetas e possivelmente gálaxias';
    var errado8: any = '3 bilhões';
    var errado9: any = 'Virar um buraco negro';
    var errado10: any = 'T433a5';
    var errado11: any = 'Falso';

    var erradas: any = {
      0: errado0,
      1: errado1,
      2: errado2,
      3: errado3,
      4: errado4,
      5: errado5,
      6: errado6,
      7: errado7,
      8: errado8,
      9: errado9,
      10: errado10,
      11: errado11,
    };
    var questao0 = 'Pergunta 03';
    var questao1 = 'Pergunta 04';
    var questao2: any = 'Pergunta 05';
    var questa03: any = 'Pergunta 06';
    var questao4: any = 'Pergunta 07';
    var questao5: any = 'Pergunta 08';
    var questao6 = 'Pergunta 09';
    var questao7 = 'Pergunta 10';
    var questao8: any = 'Pergunta 11';
    var questao09: any = 'Pergunta 12';
    var questao10: any = 'Pergunta 13';
    var questao11: any = 'Pergunta 14';

    var questoes: any = {
      0: questao0,
      1: questao1,
      2: questao2,
      3: questa03,
      4: questao4,
      5: questao5,
      6: questao6,
      7: questao7,
      8: questao8,
      9: questao09,
      10: questao10,
      11: questao11,
    };

    var alternativaC: any = document.getElementById('certo');
    var alternativaE: any = document.getElementById('errado');
    var questao = document.getElementById('tipo');

    alternativaC.style.color = 'rebeccapurple';
    alternativaE.style.color = 'rebeccapurple';
    feed.innerHTML = '';

    var perguntar = document.getElementById('pergunta');
    var mudar: number;
    var variar: number;
    variar = Math.floor(Math.random() * 1);
    mudar = Math.floor(Math.random() * 12);
    mudar = mudar - variar;

    console.log(mudar);
    questao.innerHTML = questoes[mudar - variar];
    perguntar.innerHTML = perguntas[mudar];
    alternativaE.innerHTML = `<input type="radio" name="alt" click="partir()"> <label for="alt">${
      erradas[mudar - variar]
    }</label>`;
    alternativaC.innerHTML = `<input type="radio" name="alt" click="partir()"> <label for="alt">${
      certas[mudar - variar]
    }</label>`;
  }
}
