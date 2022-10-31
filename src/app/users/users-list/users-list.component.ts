import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {

  @Input() users: User[];

  constructor() { }

}
