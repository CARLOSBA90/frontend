import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { fisica } from './model/fisica.model';


@Injectable({
  providedIn: 'root'
})
export class InitService {
  private  get = 'http://localhost:8080/api/titular/get';

  private baseURL = "http://localhost:8080/api/titular/";

  constructor( private http: HttpClient) {}

  public getList(): Observable<any[]> {
    return this.http.get<any[]>(this.get);
  }

   createTitular(fisica: fisica): Observable<Object>{
    return this.http.post(`${this.baseURL}save`, fisica);
  }


}