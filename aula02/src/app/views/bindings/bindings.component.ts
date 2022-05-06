import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  nome = 'Mário';
  url = '/assets/mario.jpg';
  cssClass = 'minhaClasse';

  constructor() { }

  ngOnInit(): void {
  }

  somar(val1: number, val2: number): number {
    return val1 + val2;
  }

  devolveMsg(): string{
    return 'Irmão do Luigi.';
  }
}
