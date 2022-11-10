import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationModalComponent {

  _object: string;

  constructor(private dialogRef: MatDialogRef<ConfirmationModalComponent>,
              @Inject(MAT_DIALOG_DATA) dialogData: {object: string}) {
    if (dialogData) {
      this._object = dialogData.object;
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onSave(): void {
    this.dialogRef.close(true);
  }
}
