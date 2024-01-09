import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NavController } from '@ionic/angular';
// import { SideMenuPageModule } from './side-menu.module';




@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit  {
  constructor(public navController: NavController,
    private breakpointObserver: BreakpointObserver) {}

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  isSmallScreen = false;

ngOnInit() {
  this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
    this.isSmallScreen = result.matches;
  });

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