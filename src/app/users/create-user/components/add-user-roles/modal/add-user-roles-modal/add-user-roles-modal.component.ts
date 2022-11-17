import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RoleService} from "../../../../../../roles/service/role.service";
import {UsersService} from "../../../../../service/users.service";
import {FormBuilder} from "@angular/forms";
import {BehaviorSubject, Subject, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-add-user-roles-modal',
  templateUrl: './add-user-roles-modal.component.html',
  styleUrls: ['./add-user-roles-modal.component.scss']
})
export class AddUserRolesModalComponent {

  private refreshUserRolesSubject$ = new BehaviorSubject<string>(null);

  availableRoles$ = this.roleService.getRoles();

  userRoles$ = this.refreshUserRolesSubject$
    .pipe(
      tap(id => console.log(id)),
      switchMap((id) => this.userService.getUserRoles(id))
    )

  form = this.fb.group({
    roles: []
  })



  constructor(private dialogRef: MatDialogRef<AddUserRolesModalComponent>,
              @Inject(MAT_DIALOG_DATA) private dialogData,
              private roleService: RoleService,
              private fb: FormBuilder,
              private userService: UsersService) {

    if (dialogData) {
      this.refreshUserRolesSubject$.next(dialogData.userId);
    }

  }

  public open(): void {
  }

}
