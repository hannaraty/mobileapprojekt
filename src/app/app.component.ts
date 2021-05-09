import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  activePageTitle = 'Home';

  Pages = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
    },
    {
      title: 'Temperature',
      url: '/temperature',
      icon: 'thermometer'
    },
    {
      title: 'Liquids',
      url: '/liquids',
      icon: 'water'
    },
    {
      title: 'Weight',
      url: '/weight',
      icon: 'scale'
    },
    {
      title: 'Length',
      url: '/lenght',
      icon: 'analytics'
    },
    {
      title: 'Currency',
      url: '/currency',
      icon:'cash'
    }
  ];

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  } 
}
