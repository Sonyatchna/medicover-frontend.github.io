import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { NgxMaskModule } from 'ngx-mask';
import { TokenInterceptor } from './shared/interceptors/token-interceptor';

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
    NgxMaskModule.forRoot(),
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
