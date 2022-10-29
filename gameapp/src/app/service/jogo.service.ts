import { Injectable } from '@angular/core';
import { Jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  //Dados em memoria
  private jogos: Jogo[] = [];
  //Id gerado automaticamente
  private idGerado = 1;
  
  constructor() { }

  inserir(jogo?: Jogo) {
    if (!jogo){
      return;
    }
    jogo.id = this.idGerado;
    this.jogos.push(jogo);
    this.idGerado++;

    this.salvar();
  }

  listar(): Jogo[] {
    this.ler();

    return this.jogos;
  }

  remover(id: number) {
    this.jogos = this.jogos.filter(jogo => jogo.id != id);

    this.salvar();
  }

  atualizar(jogo?: Jogo) {
    if (!jogo){
      return;
    }
    const index = this.jogos.findIndex(j => j.id == jogo.id)

    if (index >= 0){
      this.jogos[index] = jogo;

      this.salvar();
    }
  } 

  salvar(){
    const dadosJson = JSON.stringify(this.jogos);
    localStorage.setItem('jogos', dadosJson);
    localStorage.setItem('idGerado', this.idGerado.toString());
  }

  ler(){
    const dadosJson = localStorage.getItem('jogos');
    if (dadosJson){
      this.jogos = JSON.parse(dadosJson);
    }
    const idGerado = localStorage.getItem('idGerado');
    if (idGerado){
      this.idGerado = Number(idGerado);
    }
  }
}