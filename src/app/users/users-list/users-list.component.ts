import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {User} from "../model/user";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {

  @ViewChild(MatSort) private _sort: MatSort;
  @ViewChild(MatPaginator) private _paginator: MatPaginator;

  @Input() set users(_users: User[]) {
    this.dataSource = new MatTableDataSource<User>(_users);
    this.dataSource.sort = this._sort;
    this.dataSource.paginator = this._paginator;
  }

  @Output() afterUserSelected = new EventEmitter<User>();

  dataSource: MatTableDataSource<User>;
  _selected: User | null;

  public readonly DATA_TABLE_COLUMNS = ['id', 'username', 'email', 'enabled'];


  constructor() { }


  onRowSelect(row): void {
    this._selected = row;
    this.afterUserSelected.next(this._selected);
  }
}
