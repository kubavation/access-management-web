import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {RoleService} from "./service/role.service";
import {MatDialog} from "@angular/material/dialog";
import {RoleModalComponent} from "./components/role-modal/role-modal.component";
import {BehaviorSubject, catchError, combineLatest, EMPTY, filter, switchMap, tap} from "rxjs";
import {Role} from "./model/role";
import {ConfirmationModalProviderService} from "@cm-components-lib";
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolesComponent {

  private refreshRolesBs$ = new BehaviorSubject<void>(null);

  roles$ = this.refreshRolesBs$.pipe(
    switchMap(_ => this.rolesService.getRoles())
  );


  selectedRole: Role | null;

  constructor(private rolesService: RoleService,
              private confirmationModalProvider: ConfirmationModalProviderService,
              private dialog: MatDialog) { }

  addRole(): void {
    this.dialog.open(RoleModalComponent, {
      width: '500px',
      height: '400px'
    }).afterClosed()
      .pipe(
        filter(val => !!val),
        switchMap(role => this.rolesService.createRole(role))
      )
      .subscribe(_ => this.refreshRolesBs$.next());
  }

  editRole(): void {
    this.dialog.open(RoleModalComponent, {
      width: '500px',
      height: '400px',
      data: {
        role: this.selectedRole
      }
    }).afterClosed()
      .pipe(
        filter(val => !!val),
        switchMap(role => this.rolesService.updateRole(role)))
      .subscribe(_ => this.refreshRolesBs$.next());
  }

  deleteRole(): void {
    this.confirmationModalProvider.show(this.selectedRole.name)
      .pipe(
        switchMap(_ => this.rolesService.deleteRole(this.selectedRole))
      ).subscribe(_ => this.refreshRolesBs$.next());
  }
}
