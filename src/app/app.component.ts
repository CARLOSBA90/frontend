import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { actualizar } from './model/actualizar.model';

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
  update = false;
  actualizar: actualizar;
  actualizado: boolean = false;

  toAdd(){
    this.create = true;
    this.list = false;
    this.update = false;
         }


  toUpdate(actualizar1: actualizar){
    this.create = false;
    this.list = false;
    this.update = true;
    this.actualizar = actualizar1;

  }

  toList(){
    this.create = false;
    this.list = true;
    this.update = false;
  }

 }



