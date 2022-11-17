import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-user-roles-modal',
  templateUrl: './add-user-roles-modal.component.html',
  styleUrls: ['./add-user-roles-modal.component.scss']
})
export class AddUserRolesModalComponent {

  constructor(private dialogRef: MatDialogRef<AddUserRolesModalComponent>) { }

  public open(): void {
    //return this.dialogRef.afterClosed()
  }

}
