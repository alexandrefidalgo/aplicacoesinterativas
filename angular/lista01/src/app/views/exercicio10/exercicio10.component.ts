import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio10',
  templateUrl: './exercicio10.component.html',
  styleUrls: ['./exercicio10.component.css']
})
export class Exercicio10Component implements OnInit {

  val1 = '';
  val2 = '';
  resultado = 0;

  constructor() { }

  ngOnInit(): void {
  }

  atribuirVal1(valor: string){
    this.val1 += valor
  }

  atribuirVal2(valor: string){
    this.val2 += valor
  }

  somar(){
    this.resultado = Number(this.val1) + Number(this.val2);
  }

  subtrair(){
    this.resultado = Number(this.val1) - Number(this.val2);
  }

  multiplicar(){
    this.resultado = Number(this.val1) * Number(this.val2);
  }

  dividir(){
    this.resultado = Number(this.val1) / Number(this.val2);
  }
}
