import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-cm-employees',
  templateUrl: './cm-employees.component.html',
  styleUrls: ['./cm-employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmEmployeesComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
