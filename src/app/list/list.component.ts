import { Component, OnInit } from '@angular/core';
import { InitService } from '../init.service';
import { FormControl, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { titular } from '../model/titular.model';
import { fisica } from '../model/fisica.model';
import { juridica } from '../model/juridica.model';
import { Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  headers = ["id","rut"];

  constructor(private initService: InitService,
    private router: Router, private fb: FormBuilder) {
     }

     data!: [];
     titulares : titular[];

     rows!: [];

  ngOnInit(): void {

    this.initService.getList().subscribe((res: any)=>{
      this.data = res;

      this.titulares = res;
      this.rows = res;
      console.log(this.titulares);
    });

  }

}
