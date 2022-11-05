import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as Env} from '../../../../environments/environment'
import {Observable} from "rxjs";
import {CmEmployee} from "../model/cm-employee";

@Injectable({
  providedIn: 'root'
})
export class CompanyManagementUtilsService {

  constructor(private http: HttpClient) { }

  public getCmEmployees(): Observable<CmEmployee[]> {
    return this.http.get<CmEmployee[]>(`${Env.companyManagementUrl}/employees`);
  }
}
