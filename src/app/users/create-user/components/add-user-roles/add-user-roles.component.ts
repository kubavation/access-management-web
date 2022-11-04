import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {of} from "rxjs";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-add-user-roles',
  templateUrl: './add-user-roles.component.html',
  styleUrls: ['./add-user-roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserRolesComponent {

  @Input() form: FormGroup;

  availableRolesMock$ = of([
    {name: "ADMIN"},
    {name: "USER"},
    {name: "TODO"},
  ])

  chosenRoles = [];

  constructor() { }

  drop(event: CdkDragDrop<any[]>) {
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
