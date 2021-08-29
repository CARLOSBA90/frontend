import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent{

  title = 'Titulo';
  text = 'Texto de ejemplo';

 //constructor(private http: HttpClient){}
/* constructor(public json: JsonService){
   this.json.getJson('http://localhost:8080/api/country/getCountries').subscribe(
     (res:any) => {
     console.log(res);
     });
 }
 ngOnInit (){
  
   */
 }



