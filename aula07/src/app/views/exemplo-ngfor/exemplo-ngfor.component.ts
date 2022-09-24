import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-ngfor',
  templateUrl: './exemplo-ngfor.component.html',
  styleUrls: ['./exemplo-ngfor.component.css']
})
export class ExemploNgforComponent implements OnInit {


  animais = ['gato', 'cachorro', 'calopsita', 'onça'];

  filmes = ['Titanic', 'A Orfã', 'Senhor do Aneis'];
  notas = ['9', '8', '10'];

  constructor() { }

  ngOnInit(): void {
  }

}
