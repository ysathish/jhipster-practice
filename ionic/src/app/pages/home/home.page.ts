import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { IonMenu, NavController } from '@ionic/angular';
import { Account } from 'src/model/account.model';
import { AccountService } from '../../services/auth/account.service';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  desktop: boolean;


  constructor(public navController: NavController,
    private loginService: LoginService){}
  ngOnInit() {
    this.detectDeviceType()
  } 
  logout() {
    this.loginService.logout();
    this.goBackToHomePage();
  }
  private goBackToHomePage(): void {
    this.navController.navigateBack('');
  }
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
  }
  
 
  

  

  
