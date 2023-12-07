import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  modalactive! : string
  // openModal(){
  //   this.modalactive = "display:block"
  //   console.log("open modal")
  // }
  notifStyle1! : string
  offNotice(){
    this.modalactive = "display: none"
    console.log("cancel clicked")
    this.notifStyle1 = "display: none;"
  }
}
