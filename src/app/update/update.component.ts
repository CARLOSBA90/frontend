import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { InitService } from '../init.service';
import { FormControl, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { titular } from '../model/titular.model';
import { fisica } from '../model/fisica.model';
import { juridica } from '../model/juridica.model';
import { mensaje } from '../model/mensaje.model';
import { Router, ActivatedRoute } from '@angular/router';
import { throwIfEmpty } from 'rxjs/operators';
import { actualizar } from '../model/actualizar.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  type: number;
  fisicaUpdate!: fisica;
  juridicaUpdate!: juridica;
  isLoaded : boolean = false;
  @Input() actualizarT : actualizar;
  @Output() listar = new EventEmitter<Boolean>();

  constructor(private initService: InitService,
    private router: Router, private route: ActivatedRoute) {
      this.fisicaUpdate = new fisica();
      this.juridicaUpdate = new juridica();
    }

  ngOnInit(): void {
    this.id = this.actualizarT.getId();
    this.type = this.actualizarT.getType();

    if(this.type==1){
        this.initService.getFisicaById(this.id).subscribe((res: any) =>{
        this.fisicaUpdate = new fisica();
        this.fisicaUpdate = res;
        });

    }else if (this.type==2){
      this.initService.getJuridicaById(this.id).subscribe((res: any) =>{
      this.juridicaUpdate = new juridica();
      this.juridicaUpdate = res;
        });
    }

    this.isLoaded = true;

  }

  onSubmit(){

    if(this.type==1){
        this.initService.updateFisica(this.id, this.fisicaUpdate).subscribe( /*(res: any) =>{}*/);
         }else if(this.type==2){
        this.initService.updateJuridica(this.id, this.juridicaUpdate).subscribe( /*(res: any) =>{}*/);
    }
    this.listar.emit();
  }


}
