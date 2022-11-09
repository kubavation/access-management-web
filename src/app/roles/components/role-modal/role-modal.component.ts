import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.scss']
})
export class RoleModalComponent {

  form = this.fb.group({
    name: ['', Validators.required],
    desc: ['', Validators.required]
  })

  constructor(private dialogRef: MatDialogRef<RoleModalComponent>,
              private fb: FormBuilder) { }


  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close(this.form.getRawValue());
  }
}
