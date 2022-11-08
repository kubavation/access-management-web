import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Role} from "../../model/role";

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolesListComponent {

  @Input() roles: Role[];

  constructor() { }

}
