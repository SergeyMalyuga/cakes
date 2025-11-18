import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { HeroComponent } from '../../features/hero/hero.component';
import { CatalogComponent } from '../../features/catalog/catalog.component';
import { OrderComponent } from '../../features/order/order.component';
import {AboutComponent} from "../../features/about/about.component";
import { ReviewsComponent } from '../../features/reviews/reviews.component';
import { ExamplesComponent } from '../../features/examples/examples.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    HeroComponent,
    CatalogComponent,
    OrderComponent,
    AboutComponent,
    ReviewsComponent,
    ExamplesComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
