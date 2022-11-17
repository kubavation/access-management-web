import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {RoleService} from "../../../../../../roles/service/role.service";
import {UsersService} from "../../../../../service/users.service";

@Component({
  selector: 'app-add-user-roles-modal',
  templateUrl: './add-user-roles-modal.component.html',
  styleUrls: ['./add-user-roles-modal.component.scss']
})
export class AddUserRolesModalComponent {

  availableRoles$ = this.roleService.getRoles();

  userRoles$ = this.userService.getUserRoles("123");

  constructor(private dialogRef: MatDialogRef<AddUserRolesModalComponent>,
              private roleService: RoleService,
              private userService: UsersService) { }

  public open(): void {
    //return this.dialogRef.afterClosed()
  }

}
