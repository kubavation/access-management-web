import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsersService} from "./service/users.service";
import {Router} from "@angular/router";
import {User} from "./model/user";
import {combineLatest} from "rxjs/internal/operators/combineLatest";
import {filter, Subject, switchMap, tap} from "rxjs";
import {ConfirmationModalComponent} from "../shared/modals/confirmation-modal/confirmation-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {
  AddUserRolesModalComponent
} from "./create-user/components/add-user-roles/modal/add-user-roles-modal/add-user-roles-modal.component";
import {Role} from "../roles/model/role";

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
    tap(c => console.log(c)),
    switchMap(user => this.usersService.getUserRoles(user.id))
  )

  userDetails$ = this.selectedUserSubject$.pipe(
    switchMap(user => this.usersService.getUserDetails(user.id))
  )

  selectedUser: User;

  constructor(private usersService: UsersService,
              private dialog: MatDialog,
              private router: Router) { }

  createUser(): void {
    this.router.navigate(['/users/create']);
  }

  onSelectedUserChange(user: User) {
    this.selectedUser = user;
    this.selectedUserSubject$.next(this.selectedUser);
  }

  deleteUser(): void {
    this.dialog.open(ConfirmationModalComponent, {
      width: '500px',
      height: '400px',
      data: {
        object: this.selectedUser.username
      }
    }).afterClosed()
      .pipe(
        filter(val => !!val),
        switchMap(_ => this.usersService.deleteUser(this.selectedUser.id)))
      .subscribe();
  }

  editUserRoles(): void {
    this.dialog.open(AddUserRolesModalComponent, {
      width: '1000px',
      height: '600px',
      data: {
        userId: this.selectedUser.id
      }
    }).afterClosed()
      .pipe(
        filter(_ => !!_),
        switchMap((roles: Role[]) => this.usersService.updateUserRoles(this.selectedUser.id, roles))
      ).subscribe(res => {
        console.log(res)
      });
  }
}
