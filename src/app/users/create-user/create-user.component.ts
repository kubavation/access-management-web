import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, ValidationErrors, Validators} from "@angular/forms";
import {usernameNotTakenValidator} from "./validation/username-not-taken.validator";
import {UsersService} from "../service/users.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserComponent {

  basicInformationFormGroup = this.fb.group({
    username: ['', {
      validators: [Validators.required, Validators.minLength(5)],
      asyncValidators: [usernameNotTakenValidator(this.usersService)],
      updateOn: 'blur'
    }],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private usersService: UsersService) { }


  get usernameControl(): AbstractControl {
    return this.basicInformationFormGroup.get('username');
  }

  firstControlError(control: AbstractControl) {

    if (control.touched && control.errors) {
      return Object.keys(control.errors)[0];
    }

    return null;
  }

}
