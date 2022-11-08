import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CmEmployee} from "../../../../../../shared/company-management-utils/model/cm-employee";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-cm-employees',
  templateUrl: './cm-employees.component.html',
  styleUrls: ['./cm-employees.component.scss']
})
export class CmEmployeesComponent {

  dataSource: MatTableDataSource<CmEmployee>;
  selected: CmEmployee;

  public readonly DATA_TABLE_COLUMNS = ['firstName', 'lastName'];

  constructor(public dialogRef: MatDialogRef<CmEmployeesComponent>,
              @Inject(MAT_DIALOG_DATA) dialogData: {employees: CmEmployee[]} ) {
    this.dataSource = new MatTableDataSource<CmEmployee>(dialogData.employees);
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onSave(): void {
    this.dialogRef.close(this.selected);
  }
}
