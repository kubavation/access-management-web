import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MainMenuItem} from "../../model/main-menu-item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-item-card',
  templateUrl: './menu-item-card.component.html',
  styleUrls: ['./menu-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemCardComponent {

  @Input() menuItem: MainMenuItem;

  constructor(private router: Router) { }


  routeTo(url: string) {
    this.router.navigate([`/${url}`])
  }
}
