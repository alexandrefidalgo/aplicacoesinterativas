import { Injectable } from '@angular/core';
import { jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  //Dados em memoria
  private jogos: jogo[] = [];
  //Id gerado automaticamente
  private idGerado = 1;
  
  constructor() { }

  inserir(jogo: jogo) {
    jogo.id = this.idGerado;
    this.jogos.push(jogo);
    this.idGerado++;
  }

  listar(): jogo[] {
    return this.jogos;
  }

  remover(id: number) {
    this.jogos = this.jogos.filter(jogo => jogo.id != id);
  }

  atualizar(jogo: jogo) {
    const index = this.jogos.findIndex(j => j.id == jogo.id);
    if (index >= 0) {
      this.jogos[index] = jogo;
    }
  }
}
