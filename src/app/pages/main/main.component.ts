import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { HeroComponent } from '../../features/hero/hero.component';
import { CatalogComponent } from '../../features/catalog/catalog.component';
import { OrderComponent } from '../../features/order/order.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, HeroComponent, CatalogComponent, OrderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
