import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
} from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation, EffectFlip } from 'swiper/modules';

@Component({
  selector: 'app-swiper',
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperComponent implements AfterViewInit {
  private swiper!: Swiper;
  private elementRef: ElementRef = inject(ElementRef);

  ngAfterViewInit() {
    this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper'), {
      modules: [Autoplay, Pagination, Navigation, EffectFlip],
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
      },
    });
  }
}
