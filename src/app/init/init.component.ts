import { Component, OnInit } from '@angular/core';
import { InitService } from '../init.service';
import { FormControl, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { titular } from '../model/titular.model';
import { fisica } from '../model/fisica.model';
import { juridica } from '../model/juridica.model';
import { Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  constructor(private initService: InitService,
    private router: Router, private fb: FormBuilder) {
     }

  formulario: FormGroup = this.fb.group({
    tipo: ['', Validators.required],
  });
  data!: [];
  titulares : titular[];

   fisica: fisica = new fisica();
   juridica: juridica = new juridica();

   mensaje : object;



  ngOnInit(): void {

    this.handleTipo();
/*
     this.initService.getList().subscribe((res: any)=>{
      this.data = res;

      this.titulares = res;
      console.log(this.titulares);
    });
*/

   // this.refreshData();
  }


  refreshData(){
    this.initService.getList().subscribe((res: any)=>{
      this.data = res;
    });
  }
/*
  editData(data){
    this.myform.patchValue({
      id: data.id,
      isoCode: data.isoCode,
      name: data.name,
    });
  }

  deleteUserById(id){
    this.initService.deleteCountry(id).subscribe((res: any)=>{
      this.refreshData();
    });
  }*/

  get tipo() {
    return this.formulario.get('tipo') as FormControl;
  }

  handleTipo() {
    this.tipo.valueChanges.subscribe((res: any) => {
      if (res == 'fisica') {
        this.juridica = new juridica(); // poniendo en valor nulo el objecto //
      /*  this.formulario.removeControl('tipo');
        this.formulario.addControl('tipo',
          this.fb.control('', [Validators.required]));*/

      } else if (res == 'juridica'){
        this.fisica = new fisica(); // poniendo en valor nulo el objecto //

      }
    });
  }

  saveFisica(res: any){
    this.initService.createFisica(res).subscribe( data =>{
     // console.log(data);
    //  this.refreshData();
    this.fisica = new fisica();
    this.mensaje= data;

    },
    error => console.log(error));

  }

  saveJuridica(res: any){
        this.initService.createJuridica(res).subscribe( data =>{
         // console.log(data);
         // this.refreshData();
         this.juridica = new juridica();
         this.mensaje = data;
        },
        error => console.log(error));

      }

  onSubmit(){
     /// Requerido: metodos de validación para enviar correctamente la data
     if(!this.isObjectEmpty(this.fisica)){
       console.log("Enviando fisica");
       this.saveFisica(this.fisica);
     }else if(!this.isObjectEmpty(this.juridica)){
      console.log("Enviando juridica");
      this.saveJuridica(this.juridica);
     }

    //console.log(this.juridica);
    //this.saveTitular();
  }

  isObjectEmpty(res: any) {
    return Object.keys(res).length === 0;
}

}
