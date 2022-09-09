import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component implements OnInit {

  nome = 'Alexandre';

  constructor() { }

  ngOnInit(): void {
  }

  olaMundo(){
    alert('Olá, Mundo!');
  }

  mudarTexto(){
    this.nome = 'Marcia';
  }
}
