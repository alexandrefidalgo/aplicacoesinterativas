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
  estaEditando = false;

  constructor(private jogoService: JogoService) { 
   
  }

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista() {
    this.jogos = this.jogoService.listar();
  }
  selecionarJogo(jogo: Jogo) {
    this.jogoSelecionado = jogo;
    this.estaEditando = true;
  }

  salvar() {
    if (this.estaEditando){
      this.jogoService.atualizar(this.jogoSelecionado);
    }
    else {
      this.jogoService.inserir(this.jogoSelecionado);
    }
    this.cancelar();
  }

  cancelar() {
    this.jogoSelecionado = undefined;
    this.atualizarLista();
  }

  novo(){
    this.jogoSelecionado = new Jogo();
    this.estaEditando = false;
  }

  excluir(id?: number){
    if (!id){
      return;
    }
    this.jogoService.remover(id);
    this.atualizarLista();
  }
}
