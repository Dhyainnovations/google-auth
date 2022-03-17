import { Component } from '@angular/core';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor(private localNotifications: LocalNotifications) { }



  pushnotification() {
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      data: { secret: "key" }
    });
  }
}