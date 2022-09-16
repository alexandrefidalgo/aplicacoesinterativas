import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})
export class Exercicio04Component implements OnInit {

  imagem = 'assets/Beagle.jfif';

  constructor() { }

  ngOnInit(): void {
  }

  trocarImagem(imagem: string){
    this.imagem = imagem;
  }

}
