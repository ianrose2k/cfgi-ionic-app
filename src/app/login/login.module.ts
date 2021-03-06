import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginPageRoutingModule,
    LottieAnimationViewModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
