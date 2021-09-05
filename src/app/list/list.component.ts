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

  headersF = ["rut","nombre","apellido","cc"];

  headersJ = ["rut","razonSocial","anioFundacion"];

  constructor(private initService: InitService,
    private router: Router, private fb: FormBuilder) {
     }

     data!: [];
     titulares : titular[];
     juridicas : juridica[];
     fisicas : fisica [];

     rowsF!: [];
     rowsJ!: [];


  ngOnInit(): void {

    this.initService.getListFisica().subscribe((res: any)=>{
      this.fisicas = res;
      this.rowsF = res;
     // console.log(res);
    });

    this.initService.getListJuridica().subscribe((res: any)=>{
      this.juridicas = res;
      this.rowsJ = res;
    });


  }

}
