import { Component, HostListener, OnInit } from '@angular/core';
import { NavController,MenuController } from '@ionic/angular';
import { AccountService } from '../../services/auth/account.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  
  constructor(public menu : MenuController,private accountService: AccountService, private navController: NavController) {
    this.menu.enable(false);
    this.menu.swipeGesture(false);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // this.menu.enable(false);
   this.ionViewWillLeave();
  }

  ngOnInit() {
    this.accountService.identity().then(account => {
      if (account) {
        this.navController.navigateRoot('/tabs');
      }
    });
  }
  ionViewWillLeave(){
    this.menu.enable(false);
    // this.menu.swipeGesture(true);
    // this.menu.swipeEnable(true);
    }
}
