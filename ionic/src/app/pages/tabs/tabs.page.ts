import { Component,Renderer2, ElementRef, OnInit,HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BreakpointObserver } from '@angular/cdk/layout';



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage  implements OnInit{
  desktop : boolean=false;

  isSmallScreen = false;


  constructor(private breakpointObserver: BreakpointObserver) {}

  
  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
      this.isSmallScreen = result.matches;
    });

    this.detectDeviceType();
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