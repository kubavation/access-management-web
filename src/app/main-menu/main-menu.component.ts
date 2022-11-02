import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MenuItemProviderService} from "./service/menu-item.provider.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent {

  menuItems$ = this.menuItemProvider.menuItems$;

  constructor(private menuItemProvider: MenuItemProviderService) {

  }

}
