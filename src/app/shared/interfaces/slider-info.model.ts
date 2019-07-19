export interface SliderInfoModel {
  imageUrlArray: string[];
  imageUrlText: SliderText[];
}

export interface SliderText {
  upperText: string;
  downText: string;
  additionalText?: string;
}
