import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";
import {
  ControlErrorConfig, EMAIL_CONTROL_ERROR_CONFIG,
  REQUIRED_CONTROL_ERROR_CONFIG
} from "../../../../shared/form-utils/control-errors/model/control-error-config";
import {MatDialog} from "@angular/material/dialog";
import {CmEmployeesComponent} from "./components/cm-employees/cm-employees.component";
import {CmEmployee} from "../../../../shared/company-management-utils/model/cm-employee";

@Component({
  selector: 'app-additional-user-information',
  templateUrl: './additional-user-information.component.html',
  styleUrls: ['./additional-user-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdditionalUserInformationComponent {

  @Input() form: FormGroup;
  @Input() cmEmployees: CmEmployee[];

  constructor(public dialog: MatDialog) { }

  defaultErrorConfig: ControlErrorConfig = REQUIRED_CONTROL_ERROR_CONFIG;
  emailErrorConfig: ControlErrorConfig = [
    ...EMAIL_CONTROL_ERROR_CONFIG,
    ...REQUIRED_CONTROL_ERROR_CONFIG
  ]

  get emailControl(): AbstractControl {
    return this.form.get('email');
  }

  get firstNameControl(): AbstractControl {
    return this.form.get('firstName');
  }

  get lastNameControl(): AbstractControl {
    return this.form.get('lastName');
  }


  onFindInCompanyManagement({checked}): void {
    if (checked) {
      this.emailControl.disable();
      this.firstNameControl.disable();
      this.lastNameControl.disable();
      this.onCmEmployeeSearch();
    } else {
      this.emailControl.enable();
      this.firstNameControl.enable();
      this.lastNameControl.enable();
    }
  }

  onCmEmployeeSearch(): void {
    const dialogRef = this.dialog.open(CmEmployeesComponent, {
      width: '1000px',
      height: '400px',
      data: {
        employees: this.cmEmployees
      }
    });

    dialogRef.afterClosed()
      .subscribe(_ => console.log(_))
  }

}
