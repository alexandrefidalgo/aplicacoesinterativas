import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/model/jogo';
import { JogoService } from 'src/app/service/jogo.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  jogos: Jogo[] = [];
  jogoSelecionado?: Jogo

  constructor(private jogoService: JogoService) { 
    const jogo = new Jogo();
    jogo.nome = 'The Last of Us';
    jogo.plataforma = 'PS4';
    jogo.genero = 'Survival Horror';

    jogoService.inserir(jogo);

    const jogo2 = new Jogo();
    jogo2.nome = 'Mario';
    jogo2.plataforma = 'Nitendo';
    jogo2.genero = '';

    jogoService.inserir(jogo2);
  }

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista() {
    this.jogos = this.jogoService.listar();
  }
  selecionarJogo(jogo: Jogo) {
    this.jogoSelecionado = jogo;
  }
}
