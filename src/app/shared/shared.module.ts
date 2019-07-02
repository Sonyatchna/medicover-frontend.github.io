import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ParticlesComponent } from './components/particles/particles.component';

import { ParticlesModule } from 'angular-particle'

@NgModule({
  declarations: [
    PageNotFoundComponent,
    ParticlesComponent
  ],
  exports: [
    ParticlesComponent
  ],
  imports: [
    CommonModule,
    ParticlesModule
  ]
})
export class SharedModule { }
