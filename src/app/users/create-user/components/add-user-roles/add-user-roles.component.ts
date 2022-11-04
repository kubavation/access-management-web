import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-user-roles',
  templateUrl: './add-user-roles.component.html',
  styleUrls: ['./add-user-roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserRolesComponent {

  @Input() form: FormGroup;

  constructor() { }

}
