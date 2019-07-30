import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { ParticlesModule } from 'angular-particle';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { NavigationEnd, Router } from "@angular/router";

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
export class SharedModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    // icons

    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/social-media/facebook.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "instagram",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/social-media/instagram.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "youtube",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/social-media/youtube.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "baby",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/start-page-icons/baby.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "nurse",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/start-page-icons/nurse.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "clock",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/start-page-icons/clock.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ambulance",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/start-page-icons/ambulance.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "family",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/start-page-icons/family.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "map-location",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/start-page-icons/map-location.svg")
    );
  }
}
