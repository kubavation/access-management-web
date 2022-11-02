import { Injectable } from '@angular/core';
import {AppRoutingModule} from "../../app-routing.module";
import {Observable, of} from "rxjs";
import {MainMenuItem} from "../model/main-menu-item";

@Injectable({
  providedIn: 'root'
})
export class MenuItemProviderService {

  public readonly menuItems$: Observable<MainMenuItem[]> = of(
    [
      {
        name: 'Users',
        description: 'Users configurations',
        url: '/users'
      },
      {
        name: 'Roles',
        description: 'Roles configurations',
        url: '/roles'
      }
    ]);

  constructor() {
  }
}
