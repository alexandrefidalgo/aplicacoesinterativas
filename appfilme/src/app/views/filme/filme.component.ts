import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/model/filme';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  //filmes = new Array<Filme>();
  filmes: Filme[] = [];

  filmeSelecionado?: Filme

  constructor() {
    const filmeHobbit = new Filme();
    filmeHobbit.nome = 'O Hobbit';
    filmeHobbit.nota = 4;

    this.filmes.push(filmeHobbit);

    const filmeHarryPoter = new Filme();
    filmeHarryPoter.nome = 'Harry Poter';
    filmeHarryPoter.nota = 5;

    this.filmes.push(filmeHarryPoter);
  }

  ngOnInit(): void {
  }

  selecionarFilme(filme: Filme) {
    this.filmeSelecionado = filme;
  }

  fechar() {
    this.filmeSelecionado = undefined;
  }

  criarFilme() {
    this.filmeSelecionado = new Filme();
    this.filmes.push(this.filmeSelecionado);
  }

  removerFilme(index: number) {
    this.filmes.splice(index, 1);
    this.fechar();
  }
}
