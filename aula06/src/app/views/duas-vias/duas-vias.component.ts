import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duas-vias',
  templateUrl: './duas-vias.component.html',
  styleUrls: ['./duas-vias.component.css']
})
export class DuasViasComponent implements OnInit {

  nome = '';
  sobreNome = '';

  val1 = 0;
  val2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

  limparNome() {
    this.nome = '';
  }

  obterNomeCompleto(){
    return (this.nome + this.sobreNome).toUpperCase();
  }
}
