import { Component } from '@angular/core';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {
  todos: Array<any>;
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private lottieSplashScreen : LottieSplashScreen,
  ) {this.initializeApp()}

  initializeApp() {
    this.lottieSplashScreen.show()
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      setTimeout(() => {
        this.lottieSplashScreen.hide();
      }, 1330)
  });
}}