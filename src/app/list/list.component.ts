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
  headersF = ["rut","nombre","apellido","cc","delete","update"];
  headersJ = ["rut","razonSocial","anioFundacion","delete","update"];
  data!: [];
  juridicas : juridica[];
  fisicas : fisica [];

  constructor(private initService: InitService,
    private router: Router, private fb: FormBuilder) {
     }

  ngOnInit(): void {

    this.initService.getListFisica().subscribe((res: any)=>{
      this.fisicas = res;
     // console.log(res);
    });

    this.initService.getListJuridica().subscribe((res: any)=>{
      this.juridicas = res;
    });


  }

}
