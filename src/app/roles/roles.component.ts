import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RoleService} from "./service/role.service";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolesComponent{

  roles$ = this.rolesService.getRoles();

  constructor(private rolesService: RoleService) { }

  addRole(): void {

  }
}
