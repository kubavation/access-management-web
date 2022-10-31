import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as Env} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${Env.url}/users`);
  }
}
