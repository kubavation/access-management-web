import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";
import {ControlErrorConfig} from "../../../../shared/form-utils/control-errors/model/control-error-config";

@Component({
  selector: 'app-basic-user-information',
  templateUrl: './basic-user-information.component.html',
  styleUrls: ['./basic-user-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicUserInformationComponent {

  @Input() form: FormGroup;

  constructor() { }

  usernameErrorConfig: ControlErrorConfig =
    [
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
    ];

  passwordErrorConfig: ControlErrorConfig =
    [
      {
        error: 'required',
        message: 'This value is required'
      }
    ];

  get usernameControl(): AbstractControl {
    return this.form.get('username');
  }

  get passwordControl(): AbstractControl {
    return this.form.get('password');
  }

}
