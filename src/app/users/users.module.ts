import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {UsersRoutingModule} from "./users-routing.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { UsersListComponent } from './users-list/users-list.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
