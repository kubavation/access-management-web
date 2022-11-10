import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsersService} from "./service/users.service";
import {Router} from "@angular/router";
import {User} from "./model/user";
import {combineLatest} from "rxjs/internal/operators/combineLatest";
import {Subject, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent{

  users$ = this.usersService.getUsers();

  selectedUserSubject$ = new Subject<User>()

  userRoles$ = this.selectedUserSubject$.pipe(
    switchMap(user => this.usersService.getUserRoles(user.id))
  )

  selectedUser: User;

  constructor(private usersService: UsersService,
              private router: Router) { }

  createUser(): void {
    this.router.navigate(['/users/create']);
  }

  onSelectedUserChange(user: User) {
    this.selectedUser = user;
    this.selectedUserSubject$.next(this.selectedUser);
  }
}
