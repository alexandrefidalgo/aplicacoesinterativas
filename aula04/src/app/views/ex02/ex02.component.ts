import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.css']
})
export class Ex02Component implements OnInit {

  texto1 = 'Timão';
  texto2 = 'Volei';
  texto3 = 'Praia';

  constructor() { }

  ngOnInit(): void {
  }

  mudar1(){
    this.texto1 = 'Corinthians';
  }

  mudar2(){
    this.texto2 = 'Futebol';
  }

  mudar3(){
    this.texto3 = 'Sitio';
  }
}

// texto = '':
// trocarTexto(palavra: string){
//  this.texto = palavra;
//}
