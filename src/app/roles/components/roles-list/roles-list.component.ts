import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
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

  selected: Role | null;
  _dataSource: MatTableDataSource<Role>;

  public readonly DATA_TABLE_COLUMNS = ['name','desc'];

  constructor() { }

  onRowSelect(row): void {
    this.selected = row;
    console.log(this.selected)
  }
}
