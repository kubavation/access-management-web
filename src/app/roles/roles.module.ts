import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RolesRoutingModule} from "./roles-routing.module";
import { RolesComponent } from './roles.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import {SharedModule} from "../shared/shared.module";
import { RoleModalComponent } from './components/role-modal/role-modal.component';



@NgModule({
  declarations: [
    RolesComponent,
    RolesListComponent,
    RoleModalComponent
  ],
    imports: [
        CommonModule,
        RolesRoutingModule,
        SharedModule
    ]
})
export class RolesModule { }
