import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { EnderecoService } from 'src/app/service/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  cep = '';
  endereco?: Endereco;

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
  }
  consultarCep(){
    this.enderecoService.obterEndereco(this.cep).subscribe(endereco => {
      this.endereco = endereco;
    });
  }
}
