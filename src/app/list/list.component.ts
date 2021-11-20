import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { InitService } from '../init.service';
import { FormControl, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { titular } from '../model/titular.model';
import { fisica } from '../model/fisica.model';
import { juridica } from '../model/juridica.model';
import { actualizar } from '../model/actualizar.model';
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
  @Output() actualizar = new EventEmitter<actualizar>();
  @Input('actualizado') actualizado : boolean;


  constructor(private initService: InitService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.list();
   if(this.actualizado) {
     this.list();
   }
  }
  ngOnDestroy() {
    /// destruir el servicio para refrescar correctamente la lista
  }


  deleteTitular(id: number){
    this.initService.deleteTitular(id).subscribe( (res: any) => {
      this.mensaje = res;
      this.list();
    })
  }

  updateTitular(id: number, type: number){
    this.actualizar.emit(new actualizar(id,type));
  }

  list(){
    this.initService.getListFisica().subscribe((res: any)=>{
      this.fisicas = res;
    });

    this.initService.getListJuridica().subscribe((res: any)=>{
      this.juridicas = res;
    });

  }



}
