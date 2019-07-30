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
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { DiscountInfoComponent } from './discount-info/discount-info.component';
import { PreparationInfoComponent } from './preparation-info/preparation-info.component';
import { DepartmentComponent } from './department-info/department/department.component';
import { HomeAnalyzesComponent } from './home-analyzes/home-analyzes.component';
import { CallNurseFormComponent } from './home-analyzes/call-nurse-form/call-nurse-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [
    StartPageComponent,
    HeaderComponent,
    FooterComponent,
    MainInfoComponent,
    DepartmentInfoComponent,
    AsideMenuComponent,
    DiscountInfoComponent,
    PreparationInfoComponent,
    DepartmentComponent,
    HomeAnalyzesComponent,
    CallNurseFormComponent
  ],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    MaterialModule,
    MatMenuModule,
    SlideshowModule,
    ReactiveFormsModule,
    NgxMaskModule
  ]
})
export class StartPageModule { }
