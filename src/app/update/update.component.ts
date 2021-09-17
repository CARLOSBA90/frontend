import { Component, OnInit } from '@angular/core';
import { InitService } from '../init.service';
import { FormControl, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { titular } from '../model/titular.model';
import { fisica } from '../model/fisica.model';
import { juridica } from '../model/juridica.model';
import { mensaje } from '../model/mensaje.model';
import { Router, ActivatedRoute } from '@angular/router';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  type: number;

  constructor(private initService: InitService,
    private router: Router, private fb: FormBuilder,  private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.type = this.route.snapshot.params['type'];

    /// Atrapar titular, juridica o fisica (TRAER OTRO PARAMETRO, PARA BUSCAR EL TITULAR, j o f)
    this.initService.
  }

}
