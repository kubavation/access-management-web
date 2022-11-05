import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as Env} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Role} from "../model/role";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  public getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${Env}/roles`);
  }
}
