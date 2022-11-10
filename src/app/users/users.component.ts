import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsersService} from "./service/users.service";
import {Router} from "@angular/router";
import {User} from "./model/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent{

  users$ = this.usersService.getUsers();
  selectedUser: User;

  constructor(private usersService: UsersService,
              private router: Router) { }

  createUser(): void {
    this.router.navigate(['/users/create']);
  }
}
