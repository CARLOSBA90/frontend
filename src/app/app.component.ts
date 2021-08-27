import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RestService } from './rest.service';

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
 constructor(private RestService: RestService){}
 ngOnInit (){
   this.cargarData();
 /*  this.http.get("http://localhost:8080/").subscribe((resp:any) =>{
         this.text = resp;
   }),
   (error:any) =>{
     console.log(error)
   }*/
   
 }

 public cargarData(){
    this.RestService.get("http://localhost:8080/api/country/findAll")
  .subscribe((respuesta:any) => {
    console.log(respuesta)
  })
 }

}
