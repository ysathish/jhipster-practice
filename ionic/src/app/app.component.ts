import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonMenu, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  // showFiller = false;

  @ViewChild('mainMenu') mainMenu: IonMenu;
  // @ViewChild('mainMenu', { static: false }) set menuSetter(mainMenu: IonMenu) {
  //   if (mainMenu) {
  //     this.mainMenu = mainMenu;
  //     this.openMenu();
  //   }
  // }

  // mainMenu: IonMenu;
  constructor(public navController: NavController,private platform: Platform, private translate: TranslateService) {
    this.initializeApp();
  }
  desktop : boolean=false;
   ionViewWillEnter() {
    // await this.loadAll();
  
    // Open the menu after the view has been initialized
    this.openMenu();
  }
  
  ngOnInit() {
    this.detectDeviceType();
    // this.openMenu();
  }
 
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectDeviceType();
  }
  openMenu() {
    // Open the menu programmatically
    if (this.desktop) {
      this.mainMenu.open();
    }
  }

  detectDeviceType() {
    if (window.innerWidth > 768) {
      this.desktop = true
      
    } else {
      this.desktop = false
    }
    console.log(this.desktop)
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      if (Capacitor.isPluginAvailable('StatusBar')) {
        await StatusBar.setStyle({ style: Style.Default });
      }
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        await SplashScreen.hide();
      }
    });
    this.initTranslate();
  }

  initTranslate() {
    const enLang = 'en';

    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang(enLang);

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use(enLang); // Set your language here
    }
  }
  m1(){
    this.navController.navigateForward('/tabs/home')
  }
  m2(){
    this.navController.navigateForward('/tabs/entities')
  }
  m3(){
    this.navController.navigateForward('/tabs/account')
  }
}
