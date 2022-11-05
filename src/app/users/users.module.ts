import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {UsersRoutingModule} from "./users-routing.module";
import { UsersListComponent } from './users-list/users-list.component';
import {SharedModule} from "../shared/shared.module";
import { CreateUserComponent } from './create-user/create-user.component';
import { BasicUserInformationComponent } from './create-user/components/basic-user-information/basic-user-information.component';
import { AdditionalUserInformationComponent } from './create-user/components/additional-user-information/additional-user-information.component';
import { AddUserRolesComponent } from './create-user/components/add-user-roles/add-user-roles.component';
import { CmEmployeesComponent } from './create-user/components/additional-user-information/components/cm-employees/cm-employees.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    CreateUserComponent,
    BasicUserInformationComponent,
    AdditionalUserInformationComponent,
    AddUserRolesComponent,
    CmEmployeesComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
