import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as Env} from "../../../environments/environment";
import {Observable, tap} from "rxjs";
import {User} from "../model/user";
import {CreateUserRequest} from "../model/create-user-request";
import {Role} from "../../roles/model/role";
import {UserDetails} from "../model/user-details";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${Env.url}/users`);
  }

  public getUserDetails(userId: string): Observable<UserDetails> {
    return this.http.get<any>(`${Env.url}/users/${userId}/details`);
  }

  public checkIfUsernameIsTaken(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${Env.url}/users/${username}/exists`);
  }

  public createUser(request: CreateUserRequest): Observable<void> {
    return this.http.post<void>(`${Env.url}/users`, request);
  }

  public getUserRoles(userId: string): Observable<Role[]> {
    return this.http.get<Role[]>(`${Env.url}/users/${userId}/roles`);
  }

  public deleteUser(userId: string): Observable<void> {
    return this.http.delete<void>(`${Env.url}/users/${userId}`);
  }

  public updateUserRoles(userId: string, roles: Role[]) {
    return this.http.put<void>(`${Env.url}/users/${userId}/roles`, roles);
  }

  changeUserStatus(userId: string, userStatus: { enabled: boolean }) {
    return this.http.patch<void>(`${Env.url}/users/${userId}/status`, userStatus);
  }
}
