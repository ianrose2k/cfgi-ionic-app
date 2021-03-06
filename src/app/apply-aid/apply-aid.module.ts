import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyAidPageRoutingModule } from './apply-aid-routing.module';

import { ApplyAidPage } from './apply-aid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyAidPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ApplyAidPage]
})
export class ApplyAidPageModule {}
