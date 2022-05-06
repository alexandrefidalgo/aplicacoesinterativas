import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent implements OnInit {

  nome = 'Alexandre';
  sobrenome = 'Fidalgo';
  cssClass = 'petroleo';

  constructor() { }

  ngOnInit(): void {
  }

  corona(palavra: string): string{
    return palavra.toUpperCase();
  }

  petroleo(palavra: string): string{
    return palavra.toUpperCase();
  }
}
