
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Timezone } from '../model/timezone';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor(private http: HttpClient) { }

  obterEndereco(cep: string): Observable<Timezone> {
    return this.http.get<Timezone>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}