import { Component, OnInit } from '@angular/core';
import { Timezone } from 'src/app/model/timezone';
import { TimezoneService } from 'src/app/services/timezone.service';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {

  datetime = '';

  constructor(private timezoneService: TimezoneService) {

   }

  ngOnInit(): void {
  }

  consultarData() {
    this.datetime.obterData(datetime).subscribe((datetime: string) =>{
      this.datetime = datetime;
    });
  }
}