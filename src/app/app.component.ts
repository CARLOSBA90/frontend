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
export class AppComponent {
  title = 'Titulo';
  text = 'Texto de ejemplo';

 constructor(private http: HttpClient){}

 ngOnInit (){

   this.http.get("http://localhost:8080/").subscribe((resp:any) =>{
         this.text = resp;
   }),
   (error:any) =>{
     console.log(error)
   }
   
 }

}
