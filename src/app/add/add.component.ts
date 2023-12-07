import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alarm } from '../alarm';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private router:Router){}
  toggle = "w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500";

  ischecked0 : boolean= false;
  ischecked1 = false;
  ischecked2 = false;
  ischecked3 = false;
  ischecked4 = false;
  ischecked5 = false;
  ischecked6 = false;
  ischecked7 = false;
  everydayColor() {
    if(this.ischecked0 == false){
      this.ischecked0 = true;
      this.ischecked1=true;
      this.ischecked2=true;
      this.ischecked3=true;
      this.ischecked4=true;
      this.ischecked5=true;
      this.ischecked6=true;
      this.ischecked7=true;
      this.color_mod = 'text-[#FE5F27]';
      this.color_tue = 'text-[#FE5F27]';
      this.color_wed = 'text-[#FE5F27]';
      this.color_thu = 'text-[#FE5F27]';
      this.color_fri = 'text-[#FE5F27]';
      this.color_sat = 'text-[#FE5F27]';
      this.color_sun = 'text-red-950';
    }
    else if(this.ischecked0 == true){
      this.ischecked0 = false;
      this.ischecked1=false;
      this.ischecked2=false;
      this.ischecked3=false;
      this.ischecked4=false;
      this.ischecked5=false;
      this.ischecked6=false;
      this.ischecked7=false;
      this.color_mod = 'text-[#818182]';
      this.color_tue = 'text-[#818182]';
      this.color_wed = 'text-[#818182]';
      this.color_thu = 'text-[#818182]';
      this.color_fri = 'text-[#818182]';
      this.color_sat = 'text-[#818182]';
      this.color_sun = 'text-[#818182]';
    }
  }
  newAlarm? : Alarm;
  alarm: Alarm[] = [];

  color_mod : string = "";
  color_tue : string = "";
  color_wed : string = "";
  color_thu : string = "";
  color_fri : string = "";
  color_sat : string = "";
  color_sun : string = "";


  ngOnInit(){
    let json_data = localStorage.getItem('alarms')
    if(json_data){
      this.alarm = JSON.parse(json_data)
    }
  }


  dayColor(id:string){
    const day = document.getElementById(id) as HTMLInputElement;
    if(day.checked == false){
      this.ischecked0 = false;
      if(id == 'sun'){
        this.color_sun = 'text-[#818182]';
        this.ischecked7 = false;
      }
      else if(id == 'mod'){
        this.color_mod = 'text-[#818182]';
        this.ischecked1 = false;
      }
      else if(id == 'tue'){
        this.color_tue = 'text-[#818182]';
        this.ischecked2 = false;
      }
      else if(id == 'wed'){
        this.color_wed = 'text-[#818182]';
        this.ischecked3 = false;
      }
      else if(id == 'thu'){
        this.color_thu = 'text-[#818182]';
        this.ischecked4 = false;
      }
      else if(id == 'fri'){
        this.color_fri = 'text-[#818182]';
        this.ischecked5 = false;
      }
      else if(id == 'sat'){
        this.color_sat = 'text-[#818182]';
        this.ischecked6 = false;
      }
    }
    else{
      if(id == 'sun'){
        this.color_sun = 'text-red-950';
        this.ischecked7 = true;
      }
      else if(id == 'mod'){
        this.color_mod = 'text-[#FE5F27]';
        this.ischecked1 = true;
      }
      else if(id == 'tue'){
        this.color_tue = 'text-[#FE5F27]';
        this.ischecked2 = true;
      }
      else if(id == 'wed'){
        this.color_wed = 'text-[#FE5F27]';
        this.ischecked3 = true;
      }
      else if(id == 'thu'){
        this.color_thu = 'text-[#FE5F27]';
        this.ischecked4 = true;
      }
      else if(id == 'fri'){
        this.color_fri = 'text-[#FE5F27]';
        this.ischecked5 = true;
      }
      else if(id == 'sat'){
        this.color_sat = 'text-[#FE5F27]';
        this.ischecked6 = true;
      }
    }

    if(this.ischecked1 == true && this.ischecked2 == true && this.ischecked3 == true && this.ischecked4 == true && this.ischecked5 == true && this.ischecked6 == true && this.ischecked7 == true){
      this.ischecked0 = true;
    }
  }

  submitAlarm(name : string, mon : string, tue : string, wed : string, thu : string, fri : string, sat : string, sun : string, time : string){
    if(name != "" && time != ""){
      this.newAlarm = {
        name: name,
        mon : String(this.ischecked1),
        tue : String(this.ischecked2),
        wed : String(this.ischecked3),
        thu : String(this.ischecked4),
        fri : String(this.ischecked5),
        sat : String(this.ischecked6),
        sun : String(this.ischecked7),
        time : time,
        active : true
      }
      this.alarm.push(this.newAlarm)
      let json_data = JSON.stringify(this.alarm)
      localStorage.setItem('alarms', json_data)
    }
    this.router.navigate(["list"])
  }

}
