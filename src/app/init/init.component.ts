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
    tipo: ['', Validators.required],
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
      if (res == 'fisica') {
        this.juridica = new juridica(); // poniendo en valor nulo el objecto //
      } else if (res == 'juridica') {
        this.fisica = new fisica(); // poniendo en valor nulo el objecto //
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
    /// Requerido: metodos de validación para enviar correctamente la data
    if (!this.isObjectEmpty(this.fisica)) {

      var rut = (<HTMLInputElement>document.getElementById("rut")).value;
      var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
      var apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
      var cc = Number((<HTMLInputElement>document.getElementById("cc")).value)>0? true: false;

      if(rut!="" && nombre!="" && apellido!="" && cc)
      this.saveFisica(this.fisica); else alert("Complete todo los campos");
    } else if (!this.isObjectEmpty(this.juridica)) {
      this.saveJuridica(this.juridica);
    }
  }

  isObjectEmpty(res: any) {
    return Object.keys(res).length === 0;
  }
}
