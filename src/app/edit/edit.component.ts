import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alarm } from '../alarm';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent {
  constructor(private router: Router, private actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe(params => {
      this.id = params['id']
    })
  }

  // modal = document.getElementById("modals") as HTMLButtonElement;
  // btn = document.getElementById("delete") as HTMLOrSVGImageElement;
  // content = document.getElementById("modal-container") as HTMLDivElement;

  toggle = "w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500";

  id! : number
  newAlarm? : Alarm
  alarm : Alarm[] = []
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
  modalactive! : string


  ischecked0 = false;
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

  color_mod : string = "";
  color_tue : string = "";
  color_wed : string = "";
  color_thu : string = "";
  color_fri : string = "";
  color_sat : string = "";
  color_sun : string = "";

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

  ngOnInit(){
    let json_data = localStorage.getItem('alarms');
    if (json_data) {
      this.alarm = JSON.parse(json_data);
    }
    console.log(this.alarm)
    this.name = this.alarm[this.id]['name']
    this.time = this.alarm[this.id]['time']
    this.mon = this.alarm[this.id]['mon']
    this.tue = this.alarm[this.id]['tue']
    this.wed = this.alarm[this.id]['wed']
    this.thu = this.alarm[this.id]['thu']
    this.fri = this.alarm[this.id]['fri']
    this.sat = this.alarm[this.id]['sat']
    this.sun = this.alarm[this.id]['sun']
    this.active = this.alarm[this.id]['active']

    if(this.mon == 'true'){
      this.ischecked1 = true;
      this.color_mod = 'text-[#FE5F27]';
    }else{
      this.ischecked1 = false;
      this.color_mod = 'text-[#818182]';
    }
    if(this.tue == 'true'){
      this.ischecked2 = true;
      this.color_tue = 'text-[#FE5F27]';
    }else{
      this.ischecked2 = false;
      this.color_tue = 'text-[#818182]';
    }
    if(this.wed == 'true'){
      this.ischecked3 = true;
      this.color_wed = 'text-[#FE5F27]';
    }else if (this.wed == 'false') {
      this.ischecked3 = false;
      this.color_wed = 'text-[#818182]';
    }
    if(this.thu == 'true'){
      this.ischecked4 = true;
      this.color_thu = 'text-[#FE5F27]';
    }else{
      this.ischecked4 = false;
      this.color_thu = 'text-[#818182]';
    }
    if(this.fri == 'true'){
      this.ischecked5 = true;
      this.color_fri = 'text-[#FE5F27]';
    }else{
      this.ischecked5 = false;
      this.color_fri = 'text-[#818182]';
    }
    if(this.sat == 'true'){
      this.ischecked6 = true;
      this.color_sat = 'text-[#FE5F27]';
    }else{
      this.ischecked6 = false;
      this.color_sat = 'text-[#818182]';
    }
    if(this.sun == 'true'){
      this.ischecked7 = true;
      this.color_sun = 'text-red-950';
    }else{
      this.ischecked7 = false;
      this.color_sun = 'text-[#818182]';
    }

    if(this.ischecked1 == true && this.ischecked2 == true && this.ischecked3 == true && this.ischecked4 == true && this.ischecked5 == true && this.ischecked6 == true && this.ischecked7 == true){
      this.ischecked0 = true;
    }
  }

  editAlarm(name : string, time : string, active:boolean){
    if (this.alarm && this.alarm.length > this.id) {
      this.newAlarm = {
        name: this.name,
        mon : String(this.ischecked1),
        tue : String(this.ischecked2),
        wed : String(this.ischecked3),
        thu : String(this.ischecked4),
        fri : String(this.ischecked5),
        sat : String(this.ischecked6),
        sun : String(this.ischecked7),
        time: this.time,
        active:this.active
      };
    this.alarm[this.id] = this.newAlarm;
    let json_data = JSON.stringify(this.alarm)
    localStorage.setItem('alarms', json_data)
  }
  // console.log(name)
  this.router.navigate(["list"]);
  }

  deleteAlarm(){
    this.alarm.splice(this.id, 1);
    let json_data = JSON.stringify(this.alarm)
    localStorage.setItem('alarms', json_data)
    this.router.navigate(['list']);
  }

  openModal(){
    // this.modal.style.display = "block"
    // this.content.classList.add('open-modal')
    this.modalactive = "display:block"
    console.log("delete clicked")
  }

  closeModal(){
    this.modalactive = "display: none"
    console.log("cancel clicked")
  }
}
