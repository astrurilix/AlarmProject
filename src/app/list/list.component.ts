import { Component } from '@angular/core';
import { Alarm } from '../alarm';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  toggle = "w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"
  alarm : Alarm[] = []

  id! : number
  name! : string
  mon! : string
  tue! : string
  wed! : string
  thu! : string
  fri! : string
  sat! : string
  sun! : string
  time! : string
  active! : boolean

  ngOnInit(){
    let json_data = localStorage.getItem('alarms')
    if(json_data){
      this.alarm = JSON.parse(json_data)
    }
    console.log(this.alarm)
  }

  toggleActive(i: number){
    let json_data = localStorage.getItem('alarms')
    if(json_data){
      this.alarm = JSON.parse(json_data)
    }
    if(this.alarm[i]['active'] == false){
      this.alarm[i]['active'] = true;
    }
    else{
      this.alarm[i]['active'] = false;
    }

    json_data = JSON.stringify(this.alarm)
    localStorage.setItem('alarms', json_data)

  }
}
