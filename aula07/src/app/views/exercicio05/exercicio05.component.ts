import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio05',
  templateUrl: './exercicio05.component.html',
  styleUrls: ['./exercicio05.component.css']
})
export class Exercicio05Component implements OnInit {

  paises = ['Brasil', 'Portugal', 'Espanha', 'Canadá']

  constructor() { }

  ngOnInit(): void {
  }

  clique(pais: string){
    alert(pais)
  }
}
