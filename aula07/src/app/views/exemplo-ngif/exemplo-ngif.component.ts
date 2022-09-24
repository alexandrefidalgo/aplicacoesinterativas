import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-ngif',
  templateUrl: './exemplo-ngif.component.html',
  styleUrls: ['./exemplo-ngif.component.css']
})
export class ExemploNgifComponent implements OnInit {

  nome = '';
  msg = 'Ae, acertou!';

  constructor() { }

  ngOnInit(): void {
  }

}
