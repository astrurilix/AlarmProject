import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Alarm } from '../alarm';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DatePipe]
})
export class MainComponent {
  constructor(){
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  time: any

  class_jam ="font-bold flex flex-col text-[#FE5F27] text-4xl my-16 justify-center items-center";
  class_card= "mx-5 p-4 radius-md card flex flex-row justify-between items-end rounded-md";
  routeradd="/add";
  style_time = "font-size: 1rem; color: #818182; font-weight: 500;"

  alarm : Alarm[] = []

  ngOnInit(){
    let json_data = localStorage.getItem('alarms')
    if(json_data){
      this.alarm = JSON.parse(json_data)
    }
    console.log(this.alarm)
  }
}
