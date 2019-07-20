import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { startPageSliderInfo } from '../../../shared/constants/start-page-slider-info';
import { SliderText } from "../../../shared/interfaces/slider-info.model";

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', animate(2000)),
    ])
  ]
})
export class MainInfoComponent implements OnInit, DoCheck {

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

  ngOnInit() {
  }

}
