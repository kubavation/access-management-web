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
import {RolesModule} from "../roles/roles.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatRippleModule} from "@angular/material/core";
import { AddUserRolesModalComponent } from './create-user/components/add-user-roles/modal/add-user-roles-modal/add-user-roles-modal.component';
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    CreateUserComponent,
    BasicUserInformationComponent,
    AdditionalUserInformationComponent,
    AddUserRolesComponent,
    CmEmployeesComponent,
    UserDetailsComponent,
    AddUserRolesModalComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        RolesModule,
        MatRippleModule,
        MatMenuModule
    ]
})
export class UsersModule { }
