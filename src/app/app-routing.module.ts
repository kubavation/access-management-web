import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: '', component: MainMenuComponent, canActivate: [AuthGuard]},
  {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canActivate: [AuthGuard]},
  {path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
