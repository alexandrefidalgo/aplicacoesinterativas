import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.css']
})
export class Exercicio01Component implements OnInit {

  musica = "New Rules";
  album = "Dua Lipa";
  interprete = "Dua Lipa";

  constructor() { }

  ngOnInit(): void {
  }

}
