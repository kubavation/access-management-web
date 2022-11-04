import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";
import {ControlErrorConfig} from "../../../../shared/form-utils/control-errors/model/control-error-config";
import {DEFAULT_ERROR_MESSAGE} from "../../../../shared/form-utils/control-errors/model/erorr-message";

@Component({
  selector: 'app-additional-user-information',
  templateUrl: './additional-user-information.component.html',
  styleUrls: ['./additional-user-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdditionalUserInformationComponent {

  @Input() form: FormGroup;

  constructor() { }

  errorConfig: ControlErrorConfig = [DEFAULT_ERROR_MESSAGE];

  get emailControl(): AbstractControl {
    return this.form.get('email');
  }

  get firstNameControl(): AbstractControl {
    return this.form.get('firstName');
  }

  get lastNameControl(): AbstractControl {
    return this.form.get('lastName');
  }

}
