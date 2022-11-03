import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, ValidationErrors, Validators} from "@angular/forms";
import {usernameNotTakenValidator} from "./validation/username-not-taken.validator";
import {UsersService} from "../service/users.service";
import {ControlErrorConfig} from "../../shared/form-utils/control-errors/model/control-error-config";

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

  usernameErrorConfig: ControlErrorConfig = {
    errorConfig: [
      {
        error: 'required',
        message: 'This value is required'
      },
      {
        error: 'minlength',
        message: 'Username must have at least 5 characters'
      },
      {
        error: 'usernameAlreadyTaken',
        message: 'Username already exists'
      }
    ]
  };

  passwordErrorConfig: ControlErrorConfig = {
    errorConfig: [
      {
        error: 'required',
        message: 'This value is required'
      }
    ]
  };

  constructor(private fb: FormBuilder,
              private usersService: UsersService) { }


  get usernameControl(): AbstractControl {
    return this.basicInformationFormGroup.get('username');
  }

  get passwordControl(): AbstractControl {
    return this.basicInformationFormGroup.get('password');
  }

}
