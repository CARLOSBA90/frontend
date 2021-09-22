import { Component, OnInit } from '@angular/core';
import { InitService } from '../init.service';
import { FormControl, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { titular } from '../model/titular.model';
import { fisica } from '../model/fisica.model';
import { juridica } from '../model/juridica.model';
import { Router } from '@angular/router';
import { mensaje } from '../model/mensaje.model';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  headersF = ["rut","nombre","apellido","cc","delete","update"];
  headersJ = ["rut","razonSocial","anioFundacion","delete","update"];
  juridicas : juridica[];
  fisicas : fisica [];
  mensaje: mensaje = new mensaje();

  constructor(private initService: InitService,
    private router: Router, private fb: FormBuilder) {
     }

  ngOnInit(): void {
    this.list();
  }

  deleteTitular(id: number){
    this.initService.deleteTitular(id).subscribe( (res: any) => {
      this.mensaje = res;
      this.list();
    })
  }

  updateTitular(id: number, type: number){
    this.router.dispose;
    this.router.navigate(['/update', id, type]);
  }

  list(){
    this.initService.getListFisica().subscribe((res: any)=>{
      this.fisicas = res;
    });

    this.initService.getListJuridica().subscribe((res: any)=>{
      this.juridicas = res;
    });

  }

  refresh(){
    this.list();
  }



}
