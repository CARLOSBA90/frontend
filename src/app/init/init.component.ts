import { Component, OnInit } from '@angular/core';
import { InitService } from '../init.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule
} from '@angular/forms';
import { country } from '../model/country.model';
import { titular } from '../model/titular.model';
import { fisica } from '../model/fisica.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  //myform: FormGroup;
  data!: [];
  //countries : country[];
  titulares : titular[];

   fisica: fisica = new fisica();

  constructor(private initService: InitService,
    private router: Router) { }

  ngOnInit(): void {


     this.initService.getList().subscribe((res: any)=>{
      this.data = res;
      
      this.titulares = res;
      console.log(this.titulares);
    });
  

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


  saveTitular(){
    this.initService.createTitular(this.fisica).subscribe( data =>{
      console.log(data);
      this.refreshData();
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.fisica);
    this.saveTitular();
  }

}