import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RolesRoutingModule} from "./roles-routing.module";
import { RolesComponent } from './roles.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';



@NgModule({
  declarations: [
    RolesComponent,
    RolesListComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }
