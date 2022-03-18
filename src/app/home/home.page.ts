import { Component } from '@angular/core';
import { LocalNotifications, LocalNotificationSchema } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notificationsDelayInSeconds: string = "2";
  constructor() { }


  ScheduleNotification() {
    var options: LocalNotificationSchema = {
      id: 123,
      title: "title",
      body: "Body",
      summaryText: "summaryText",
      largeBody: "largeBody",
      schedule: { at: new Date(new Date().getTime() + parseInt(this.notificationsDelayInSeconds) * 1000) },
      extra: "extra"
    }
    LocalNotifications.schedule({ notifications: [options] }).then(() => {
      alert("Notification");
    })
  }
}