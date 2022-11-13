import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {CmEmployee} from "../../../shared/company-management-utils/model/cm-employee";
import {Role} from "../../model/role";

@Component({
  selector: 'app-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.scss']
})
export class RoleModalComponent {

  form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  })

  constructor(private dialogRef: MatDialogRef<RoleModalComponent>,
              @Inject(MAT_DIALOG_DATA) dialogData: {role: Role | null},
              private fb: FormBuilder) {
    if (dialogData) {
      this.form.patchValue(dialogData.role);
      this.nameControl.disable();
    }
  }

  get nameControl() {
    return this.form.get('name');
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close(this.form.getRawValue());
  }
}
