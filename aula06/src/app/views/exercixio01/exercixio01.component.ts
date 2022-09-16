import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercixio01',
  templateUrl: './exercixio01.component.html',
  styleUrls: ['./exercixio01.component.css']
})
export class Exercixio01Component implements OnInit {

  text1 = '';
  text2 = '';
  val1 = '';
  val2 = '';

  constructor() { }

  ngOnInit(): void {
  }

  multiplicar1(){
    return Number(this.text1) * Number(this.text2);
  }

  multiplicar(){
    return Number(this.val1) * Number(this.val2);
  }

}
