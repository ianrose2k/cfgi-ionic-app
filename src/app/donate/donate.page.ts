import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Browser } from '@capacitor/browser';
import '@teamhive/lottie-player';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {
  
  constructor(private iab: InAppBrowser) {

  }
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    presentationstyle : 'fullscreen',//iOS only 
    fullscreen : 'yes',//Windows only    
  };
  
  public openWithSystemBrowser(url: string){
    this.iab.create(url,"_system", this.options);
  }
  public openWithInAppBrowser(url){
    this.iab.create(url,'_blank', this.options);
  }
  public openWithCordovaBrowser(url){
    this.iab.create(url,"_self", this.options);
  }  
  async openLink(Url){
    await Browser.open({ url: Url });
  }
  ngOnInit() {
  }

}
