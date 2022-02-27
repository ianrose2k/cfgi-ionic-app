import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {
  
  constructor() { }
  async openLink(Url){
    await Browser.open({ url: Url });
  }
  ngOnInit() {
  }

}
