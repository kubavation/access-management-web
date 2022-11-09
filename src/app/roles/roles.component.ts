import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RoleService} from "./service/role.service";
import {MatDialog} from "@angular/material/dialog";
import {RoleModalComponent} from "./components/role-modal/role-modal.component";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolesComponent {

  roles$ = this.rolesService.getRoles();

  constructor(private rolesService: RoleService,
              private dialog: MatDialog) { }

  addRole(): void {
    this.dialog.open(RoleModalComponent, {
      width: '500px',
      height: '400px'
    }).afterClosed()
      .subscribe(result => {
        if (!!result) {
          this.rolesService.createRole(result)
            .subscribe(res => console.log(res))
        }
      })
  }
}
