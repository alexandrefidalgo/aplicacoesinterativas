import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})
export class Exercicio04Component implements OnInit {

  cachorros = ['assets/chihuahua.png', 'assets/doberman.png', 'assets/viralata.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
