import { Component } from '@angular/core';
import { LocalNotifications, LocalNotificationSchema } from '@capacitor/local-notifications';
import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notificationsDelayInSeconds: string = "2";
  constructor(private googlePlus: GooglePlus) { }


  ScheduleNotification() {
    var options: LocalNotificationSchema = {
      id: 1,
      title: "title",
      body: "Body",
      summaryText: "summaryText",
      largeBody: "largeBody",
      schedule: { at: new Date(new Date().getTime() + parseInt(this.notificationsDelayInSeconds) * 1000) },
      extra: "extra",
    }
    LocalNotifications.schedule({ notifications: [options,options] }).then(() => {
      alert("Notification" + options.schedule);
    })
  }


  googleSignin(){
    this.googlePlus.login({})
    .then(res => alert(res))
    .catch(err => alert(err));
  }
  
  googlesignout(){
    this.googlePlus.logout();
    this.googlePlus.disconnect();
    alert("Disconnected")
  }




  
}