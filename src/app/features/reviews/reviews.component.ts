import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SwiperComponent } from '../swiper/swiper.component';

@Component({
  selector: 'app-reviews',
  imports: [SwiperComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {}
