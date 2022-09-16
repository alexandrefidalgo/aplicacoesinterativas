import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.css']
})
export class Exercicio02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  somar(val1: number, val2: number){
    return val1 + val2;
  }

}
