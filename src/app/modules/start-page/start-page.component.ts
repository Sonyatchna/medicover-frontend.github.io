import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { SliderText } from "../../shared/interfaces/slider-info.model";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { startPageSliderInfo } from '../../shared/constants/start-page-slider-info';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', animate(2000)),
    ])
  ]
})
export class StartPageComponent implements OnInit, DoCheck, AfterViewInit {

  @ViewChild('slideShow', { static: false }) slideShow: any;

  currentSlideIndex = 0;
  currentText: SliderText[] = [];
  imageArray: string[];

  constructor() {
    this.imageArray = startPageSliderInfo.imageUrlArray;
    this.currentText.push(startPageSliderInfo.imageUrlText[0]);
  }

  ngDoCheck() {
    if (this.slideShow) {
      if (this.slideShow.slideIndex !== this.currentSlideIndex) {
        this.currentSlideIndex = this.slideShow.slideIndex;
        this.currentText.pop();
        this.currentText.push(startPageSliderInfo.imageUrlText[this.slideShow.slideIndex]);
      }
    }
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

}
