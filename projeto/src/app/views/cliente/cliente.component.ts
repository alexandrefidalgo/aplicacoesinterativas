import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  listaClientes: Cliente[] = [];
  cliente?: Cliente;
  editando = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.clienteService.listar().subscribe(clientes => {
      this.listaClientes = clientes;
    });
  }

  novo() {
    this.cliente = new Cliente();
    this.editando = false;
  }

  cancelar() {
    this.cliente = undefined;
  }

  salvar() {
    if(!this.cliente) {
      return;
    }

    if (!this.editando){
      this.clienteService.inserir(this.cliente).subscribe(cliente => {
        this.listar();
        this.cancelar();
      });
    }
    else {
      this.clienteService.atualizar(this.cliente).subscribe(cliente => {
        this.listar();
        this.cancelar();
      });
    }   
  }

  excluir(id?: number) {
    if (!id){
      return;
    }

    const resposta = confirm('Deseja mesmo deletar esse cliente?');

    if (resposta){
      this.clienteService.excluir(id).subscribe(() => {
        this.listar();
        this.cancelar();
      });
    }
  }

  selecionar(cliente: Cliente) {
    this.cliente = cliente;
    this.editando = true;
  }

}
