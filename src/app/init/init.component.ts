import { Component, OnInit } from '@angular/core';
import { InitService } from '../init.service';
import {
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { titular } from '../model/titular.model';
import { fisica } from '../model/fisica.model';
import { juridica } from '../model/juridica.model';
import { mensaje } from '../model/mensaje.model';
import { Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs/operators';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css'],
})
export class InitComponent implements OnInit {
  constructor(
    private initService: InitService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  formulario: FormGroup = this.fb.group({
    tipo:     ['', Validators.required],
    rut:      ['', Validators.required],
    nombre:   ['', Validators.required],
    apellido: ['', Validators.required],
    cc:       ['', Validators.required],
    razonSocial:   ['', Validators.required],
    anioFundacion: ['', Validators.required],
  });

  fisica: fisica = new fisica();
  juridica: juridica = new juridica();

  mensaje: mensaje = new mensaje();

  ngOnInit(): void {
    this.handleTipo();
  }

  get tipo() {
    return this.formulario.get('tipo') as FormControl;
  }

  handleTipo() {
    this.tipo.valueChanges.subscribe((res: any) => {
      if (this.mensaje.texto!="") this.mensaje.texto = "";

      if (res == 'fisica') {
        this.juridica = new juridica(); // poniendo en valor nulo el objecto //
      } else if (res == 'juridica') {
        this.fisica   = new fisica(); // poniendo en valor nulo el objecto //
      }
    });
  }

  saveFisica(res: any) {
    this.initService.createFisica(res).subscribe(
      (data: any) => {
        this.fisica = new fisica();
        this.mensaje = data;
      },
      (error) => console.log(error)
    );
  }
  saveJuridica(res: any) {
    this.initService.createJuridica(res).subscribe(
      (data: any) => {
        this.juridica = new juridica();
        this.mensaje = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    let opcion = this.formulario.get('tipo')?.value;
    /// Requerido: metodos de validación para enviar correctamente la data
      var rut  = this.formulario.get('rut')?.value;
    if (opcion==="fisica") {
      var nombre   = this.formulario.get('nombre')?.value;
      var apellido = this.formulario.get('apellido')?.value;
      var cc       = this.formulario.get('cc')?.value>0? true: false;
      if(rut!="" && nombre!="" && apellido!="" && cc)
      this.saveFisica(this.fisica); else alert("Complete correctamente todo los campos");
    } else if (opcion==="juridica") {
      var razonSocial = this.formulario.get('razonSocial')?.value;
      var anio        = this.formulario.get('anioFundacion')?.value;
      var fecha       = (anio>=1880 && anio<=2022)? true: false;
      if(rut!="" && razonSocial!="" && fecha)
      this.saveJuridica(this.juridica); else alert("Complete correctamente todo los campos");
    }
  }

  isObjectEmpty(res: any) {
    return Object.keys(res).length === 0;
  }
}
