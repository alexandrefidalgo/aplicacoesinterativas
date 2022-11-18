import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("http://localhost:3000/cliente");
  }

  inserir(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>("http://localhost:3000/cliente", cliente);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/cliente/${id}`);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    if (!cliente.id){
      return EMPTY;
    }
    return this.http.put<Cliente>(`http://localhost:3000/cliente/${cliente.id}`, cliente);
  }
}
