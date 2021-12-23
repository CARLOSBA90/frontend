import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { fisica } from './model/fisica.model';
import { juridica } from './model/juridica.model';


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
  public getListFisica(): Observable<any[]> {
    return this.http.get<any[]>(this.get+"/fisica");
  }

  public getListJuridica(): Observable<any[]> {
    return this.http.get<any[]>(this.get+"/juridica");
  }

  public createFisica(fisica: fisica): Observable<Object>{
    return this.http.post(`${this.baseURL}save/fisica`, fisica);
  }

  public createJuridica(juridica: juridica): Observable<Object>{
    return this.http.post(`${this.baseURL}save/juridica`, juridica);
  }

  public deleteTitular(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }

  public getFisicaById(id: number): Observable<fisica> {
    return this.http.get<fisica>(this.get+`/fisica/${id}`);
  }

  public getJuridicaById(id: number): Observable<juridica> {
    return this.http.get<juridica>(this.get+`/juridica/${id}`);
  }


  public updateFisica(id: number, fisica : fisica): Observable<Object> {
    return this.http.put(`${this.baseURL}update/fisica/${id}`, fisica);
  }

  public updateJuridica(id: number, juridica : juridica): Observable<Object> {
    return this.http.put(`${this.baseURL}update/juridica/${id}`, juridica);
  }


}
