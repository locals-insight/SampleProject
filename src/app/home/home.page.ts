import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth, AngularFireAuthModule}from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public ngFireAuth: AngularFireAuth) {

  }
  async logout(){
    // this.router.navigate(['/login']);
    await this.ngFireAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    }).catch((error) => {
      // An error happened.
    });
  }


}
