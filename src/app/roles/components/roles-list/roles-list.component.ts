import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Role} from "../../model/role";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolesListComponent {

  @Input() set roles(roles: Role[]) {
    this._dataSource = new MatTableDataSource<Role>(roles);
  }

  @Output() afterRoleSelected = new EventEmitter<Role>();

  selected: Role | null;
  _dataSource: MatTableDataSource<Role>;

  public readonly DATA_TABLE_COLUMNS = ['name','description'];

  constructor() { }

  onRowSelect(row): void {
    this.selected = row;
    this.afterRoleSelected.next(this.selected);
  }

}
