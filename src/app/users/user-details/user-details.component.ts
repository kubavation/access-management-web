import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {UserDetails} from "../model/user-details";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {

  @Input() userDetails: UserDetails;

  constructor() { }


}
