import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page.component';
import { MaterialModule } from '../../material/material.module';
import { MatMenuModule } from '@angular/material/menu';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    MaterialModule,
    MatMenuModule,
    SlideshowModule
  ]
})
export class StartPageModule { }
