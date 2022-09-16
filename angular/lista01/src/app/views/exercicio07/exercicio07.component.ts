import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio07',
  templateUrl: './exercicio07.component.html',
  styleUrls: ['./exercicio07.component.css']
})
export class Exercicio07Component implements OnInit {

  classeCss = 'vermelho';

  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse(classeCss: string){
    this.classeCss = classeCss;
  }

}
