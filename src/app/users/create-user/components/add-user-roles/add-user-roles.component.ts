import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {of} from "rxjs";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {RoleService} from "../../../../roles/service/role.service";
import {Role} from "../../../../roles/model/role";

@Component({
  selector: 'app-add-user-roles',
  templateUrl: './add-user-roles.component.html',
  styleUrls: ['./add-user-roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserRolesComponent {

  @Input() form: FormGroup;

  availableRoles = this.roleService.getRoles();

  chosenRoles = [];

  constructor(private roleService: RoleService) { }

  drop(event: CdkDragDrop<Role[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    this.form.patchValue({roles: this.chosenRoles})
  }
}
