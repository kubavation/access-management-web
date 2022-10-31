import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsersService} from "./service/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent{

  users$ = this.usersService.getUsers();

  constructor(private usersService: UsersService) { }

}
