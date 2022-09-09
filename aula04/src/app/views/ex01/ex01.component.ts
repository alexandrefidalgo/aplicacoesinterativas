import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component implements OnInit {

  img = 'assets/timao.jfif';

  constructor() { }

  ngOnInit(): void {
  }

  trocaImagem(){
    if (this.img == 'assets/timao.jfif'){
      this.img = 'assets/torcida.jfif';
    }
    else {
      this.img = 'assets/timao.jfif';
    }
  }
}
