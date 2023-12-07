import { Component } from '@angular/core';
import { Alarm } from './alarm';
// import { notifStyle1 } from './notification/notification.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( ){
    this.notifStyle = "display: none"
    setInterval(() => {
      this.time = new Date();
      this.timeString = this.time.toTimeString()
      this.dateString = this.time.toDateString().substring(0,3)
      // console.log(this.dateString)
      // this.dateString.substring(0,3)
      for ( let i = 0; i < this.alarm.length; i++){
        if(this.dateString == 'Mon' && this.alarm[i]['mon']=="true"){
          if(this.alarm[i]['time'] == this.timeString.substring(0, 5) && this.alarm[i]['active']){
            console.log(this.notificationOn)
            if(this.notificationOn){
              console.log("active")
              this.notificationOn = false
              // this.ringtone.muted = true
              this.ringtone.play()
              this.ringtone.loop = true
              this.notifStyle = "display: block"
              this.alarmname =this.alarm[i]['name']
              this.alarmtime =this.alarm[i]['time']
              // notif.openModal()
            }
          }
        }
        if(this.dateString == 'Tue' && this.alarm[i]['tue']=="true"){
          if(this.alarm[i]['time'] == this.timeString.substring(0, 5) && this.alarm[i]['active']){
            console.log(this.notificationOn)
            if(this.notificationOn){
              console.log("active")
              this.notificationOn = false
              // this.ringtone.muted = true
              this.ringtone.play()
              this.ringtone.loop = true
              this.notifStyle = "display: block"
              this.alarmname =this.alarm[i]['name']
              this.alarmtime =this.alarm[i]['time']
              // notif.openModal()
            }
          }
        }
        if(this.dateString == 'Wed' && this.alarm[i]['wed']=="true"){
          if(this.alarm[i]['time'] == this.timeString.substring(0, 5) && this.alarm[i]['active']){
            console.log(this.notificationOn)
            if(this.notificationOn){
              console.log("active")
              this.notificationOn = false
              // this.ringtone.muted = true
              this.ringtone.play()
              this.ringtone.loop = true
              this.notifStyle = "display: block"
              this.alarmname =this.alarm[i]['name']
              this.alarmtime =this.alarm[i]['time']
              // notif.openModal()
            }
          }
        }
        if(this.dateString == 'Thu' && this.alarm[i]['thu']=="true"){
          if(this.alarm[i]['time'] == this.timeString.substring(0, 5) && this.alarm[i]['active']){
            console.log(this.notificationOn)
            if(this.notificationOn){
              console.log("active")
              this.notificationOn = false
              // this.ringtone.muted = true
              this.ringtone.play()
              this.ringtone.loop = true
              this.notifStyle = "display: block"
              this.alarmname =this.alarm[i]['name']
              this.alarmtime =this.alarm[i]['time']
              // notif.openModal()
            }
          }
        }
        if(this.dateString == 'Fri' && this.alarm[i]['fri']=="true"){
          if(this.alarm[i]['time'] == this.timeString.substring(0, 5) && this.alarm[i]['active']){
            console.log(this.notificationOn)
            if(this.notificationOn){
              console.log("active")
              this.notificationOn = false
              // this.ringtone.muted = true
              this.ringtone.play()
              this.ringtone.loop = true
              this.notifStyle = "display: block"
              this.alarmname =this.alarm[i]['name']
              this.alarmtime =this.alarm[i]['time']
              // notif.openModal()
            }
          }
        }
        if(this.dateString == 'Sat' && this.alarm[i]['sat']=="true"){
          if(this.alarm[i]['time'] == this.timeString.substring(0, 5) && this.alarm[i]['active']){
            console.log(this.notificationOn)
            if(this.notificationOn){
              console.log("active")
              this.notificationOn = false
              // this.ringtone.muted = true
              this.ringtone.play()
              this.ringtone.loop = true
              this.notifStyle = "display: block"
              this.alarmname =this.alarm[i]['name']
              this.alarmtime =this.alarm[i]['time']
              // notif.openModal()
            }
          }
        }
        if(this.dateString == 'Sun' && this.alarm[i]['sun']=="true"){
          if(this.alarm[i]['time'] == this.timeString.substring(0, 5) && this.alarm[i]['active']){
            console.log(this.notificationOn)
            if(this.notificationOn){
              console.log("active")
              this.notificationOn = false
              // this.ringtone.muted = true
              this.ringtone.play()
              this.ringtone.loop = true
              this.notifStyle = "display: block"
              this.alarmname =this.alarm[i]['name']
              this.alarmtime =this.alarm[i]['time']
              // notif.openModal()
            }
          }
        }
      }
      // console.log(this.alarm[0]['time'])
    }, 1000);
  }
  time: any
  timeString! : string
  dateString! : string
  dateNow! : boolean
  notificationOn = true
  notifStyle! : string
  alarmname! : string
  alarmtime! : string

  title = 'AlarmProject';
  ringtone = new Audio('./assets/audio/alarm.mp3')
  alarm : Alarm[] = []



  ngOnInit(){
    let json_data = localStorage.getItem('alarms')
    if(json_data){
      this.alarm = JSON.parse(json_data)
    }
  }
  offModal !: boolean
  offNotice(){
    console.log("cancel clicked")
    this.notifStyle = "display: none;"
    this.offModal = true
    this.ringtone.muted = true
  }

}
