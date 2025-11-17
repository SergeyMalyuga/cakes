import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
} from '@angular/core';
import Swiper from 'swiper';
import {Autoplay, Pagination, Navigation, EffectFlip} from 'swiper/modules';

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
            centeredSlides: true,
            watchOverflow: true,
            spaceBetween: 1,
            navigation: {
                nextEl: '.reviews__button-next',
                prevEl: '.reviews__button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 35
                },
                1400: {
                    slidesPerView: 1.75,
                    spaceBetween: 35
                },
                1920: {
                    slidesPerView: 1,
                    spaceBetween: 35
                }
            },
        });
    }
}
