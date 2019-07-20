import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page.component';
import { MaterialModule } from '../../material/material.module';
import { MatMenuModule } from '@angular/material/menu';
import { SlideshowModule } from 'ng-simple-slideshow';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { DepartmentInfoComponent } from './department-info/department-info.component';

@NgModule({
  declarations: [
    StartPageComponent,
    HeaderComponent,
    FooterComponent,
    MainInfoComponent,
    DepartmentInfoComponent
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
