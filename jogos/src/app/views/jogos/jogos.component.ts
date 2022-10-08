import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/model/jogo';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogos: Jogo[] = [];

  jogoSelecionado?: Jogo

  constructor() {
    const jogoFifa = new Jogo();
    jogoFifa.nome = 'Fifa';
    jogoFifa.produtora = 'EA Sports FC';
    jogoFifa.plataforma = 'PlayStation';
    jogoFifa.genero = 'Esportes';

    this.jogos.push(jogoFifa);

    const jogoMario = new Jogo();
    jogoMario.nome = 'Super Mario';
    jogoMario.produtora = 'Nintendo';
    jogoMario.plataforma = 'Super Nintendo';
    jogoMario.genero = 'Aventura';

    this.jogos.push(jogoMario);
  }

  ngOnInit(): void {
  }

  selecionarJogo(jogo: Jogo) {
    this.jogoSelecionado = jogo;
  }

  fechar() {
    this.jogoSelecionado = undefined;
  }

  criarJogo() {
    this.jogoSelecionado = new Jogo();
    this.jogos.push(this.jogoSelecionado);
  }

  removerJogo(index: number) {
    this.jogos.splice(index, 1);
    this.fechar();
  }
}
