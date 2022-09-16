import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio09',
  templateUrl: './exercicio09.component.html',
  styleUrls: ['./exercicio09.component.css']
})
export class Exercicio09Component implements OnInit {

  classeCss = '';

  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse(){
    this.classeCss = 'botaoCor';
  }
}
