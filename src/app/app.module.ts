import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NotifierModule.withConfig( {
      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
