import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CmEmployee} from "../../../../../../shared/company-management-utils/model/cm-employee";
import {MatTableDataSource} from "@angular/material/table";
import {Observable} from "rxjs";

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
              @Inject(MAT_DIALOG_DATA) dialogData: {employees: CmEmployee[], selectedEmployeeId: number | null} ) {
    this.dataSource = new MatTableDataSource<CmEmployee>(dialogData.employees);
    if (!!dialogData.selectedEmployeeId) {
      this.selected = dialogData.employees.find(e => e.id === dialogData.selectedEmployeeId);
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onSave(): void {
    this.dialogRef.close(this.selected);
  }
}
