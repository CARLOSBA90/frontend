import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private  allCountries = 'http://localhost:8080/api/country/findAll';
  //private saveOrUpdateUser = 'http://localhost:8080/add-user';
 // private deleteUserr = 'http://localhost:8080/delete-user?id=';

  constructor( private http: HttpClient) {}

  public getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.allCountries);
  }

/*    const formD = new FormData();
    Object.keys(formGroup.controls).forEach(key => {
      if(formGroup.controls[key].value){
        formD.append(key,formGroup.controls[key].value);
      }else {
        formD.append(key, '');
      }
      
    });
    return this.http.post<any[]>(this.saveOrUpdateUser, formD);
  }

  public deleteUser(id){
    return this.http.delete<any[]>(this.deleteUserr + id);
  }*/
}