import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-cm-employees',
  templateUrl: './cm-employees.component.html',
  styleUrls: ['./cm-employees.component.scss']
})
export class CmEmployeesComponent {

  constructor(public dialogRef: MatDialogRef<CmEmployeesComponent>) { }

}
