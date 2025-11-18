import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
} from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

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
      modules: [Autoplay, Navigation],
      centeredSlides: true,
      watchOverflow: true,
      loop: true,
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
      },
      spaceBetween: -60,
      navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1.75,
        },
        1920: {
          slidesPerView: 1,
        },
      },
    });
  }
}
