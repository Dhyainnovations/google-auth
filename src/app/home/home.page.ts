import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userData: any = {};

  constructor(
    private googlePlus: GooglePlus
  ) {}

  googleSignIn() {
    this.googlePlus.login({})
      .then(result => this.userData = result)
      .catch(err => this.userData = `Error ${JSON.stringify(err)}`);
      alert( this.userData.name)
  }

}