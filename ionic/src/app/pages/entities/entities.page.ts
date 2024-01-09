import { Component, HostListener } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entities',
  templateUrl: 'entities.page.html',
  styleUrls: ['entities.page.scss'],
})
export class EntitiesPage {
  desktop: boolean;

  constructor(public navController: NavController) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectDeviceType();
  }

  detectDeviceType() {
    if (window.innerWidth < 768) {
      this.desktop = false
      
    } else {
      this.desktop = true
    }
    console.log(this.desktop)
  }

  openPage(page) {
    this.navController.navigateForward('/tabs/entities/' + page.route);
  }
}
