import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio08',
  templateUrl: './exercicio08.component.html',
  styleUrls: ['./exercicio08.component.css']
})
export class Exercicio08Component implements OnInit {

  classeCss = 'off';

  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse(classeCss: string){
    this.classeCss = classeCss;
  }

}
