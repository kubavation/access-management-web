import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControlStatus, ValidationErrors, Validators} from "@angular/forms";
import {usernameNotTakenValidator} from "./validation/username-not-taken.validator";
import {UsersService} from "../service/users.service";
import {filter, map, Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {RoleService} from "../../roles/service/role.service";
import {Role} from "../../roles/model/role";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserComponent {

  roles$ = this.roleService.getRoles();

  basicInformationFormGroup = this.fb.group({
    username: ['', {
      validators: [Validators.required, Validators.minLength(5)],
      asyncValidators: [usernameNotTakenValidator(this.usersService)]
    }],
    password: ['', {
      validators: [Validators.required]
    }]
  })

  basicInformationFormGroupValid$ = this.basicInformationFormGroup.statusChanges
    .pipe(
      map((status: FormControlStatus) => status === 'VALID')
    )

  additionalInformationFormGroup = this.fb.group({
    email: ['', {
      validators: [Validators.required, Validators.email],
    }],
    firstName: ['', {
      validators: [Validators.required]
    }],
    lastName: ['', {
      validators: [Validators.required]
    }]
  })

  additionalInformationFormGroupValid$ = this.additionalInformationFormGroup.statusChanges
    .pipe(
      map((status: FormControlStatus) => status === 'VALID')
    )

  userRolesFormGroup = this.fb.group({
    roles: []
  })


  constructor(private fb: FormBuilder,
              private router: Router,
              private roleService: RoleService,
              private usersService: UsersService) {
  }

  save(): void {
    console.log(this.basicInformationFormGroup.getRawValue())
    console.log(this.additionalInformationFormGroup.getRawValue())
    console.log(this.userRolesFormGroup.getRawValue())
  }

  cancelUserCreation(): void {
    this.router.navigate(['/users']);
  }

}
