import { Component } from '@angular/core';
import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userData: any = {};

  constructor(
    private googlePlus: GooglePlus
  ) { }

  googleSignIn() {
    this.googlePlus.login({})
      .then(res => alert(res))
      .catch(err => alert(err));

  }

}