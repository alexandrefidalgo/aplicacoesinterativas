import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.css']
})
export class Exercicio03Component implements OnInit {

  val1 = 0;
  val2 = 0;
  resultado = 0;

  constructor() { }

  ngOnInit(): void {
  }

  somar(){
    this.resultado = this.val1 + this.val2;
  }

  subtrair(){
    this.resultado = this.val1 - this.val2;
  }

  multiplicar(){
    this.resultado = this.val1 * this.val2;
  }

  dividir(){
    this.resultado = this.val1 / this.val2;
  }
}
