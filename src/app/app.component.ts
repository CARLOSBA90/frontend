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
  title = 'CRUD: Titulares';
  create = false;
  list = false;

  toAdd(){
    this.create = true;
    this.list = false;
         }

  toList(){
    this.create = false;
    this.list = true;
  }
 }



