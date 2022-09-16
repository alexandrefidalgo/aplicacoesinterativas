import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.css']
})
export class Exercicio03Component implements OnInit {

  classeCss = 'vermelho';

  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse(){
    if (this.classeCss == 'vermelho'){
      this.classeCss = 'azul';
    }
    else{
      this.classeCss = 'vermelho';
    }
  }

}
