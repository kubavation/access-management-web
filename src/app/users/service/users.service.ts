import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as Env} from "../../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {CreateUserRequest} from "../model/create-user-request";
import {Role} from "../../roles/model/role";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${Env.url}/users`);
  }

  public checkIfUsernameIsTaken(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${Env.url}/users/${username}/exists`);
  }

  public createUser(request: CreateUserRequest): Observable<void> {
    return this.http.post<void>(`${Env.url}/users`, request);
  }

  public getUserRoles(userId: number): Observable<Role[]> {
    return this.http.get<Role[]>(`${Env.url}/users/${userId}/roles`);
  }

}
