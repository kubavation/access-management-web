import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../keycloak/service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router,
              private authService: AuthService) { }

  redirectHome(): void {
    this.router.navigate(['/']);
  }

  async logout() {
    await this.authService.logout();
  }
}
