import { Component, OnInit } from '@angular/core';
import { InitService } from '../init.service';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { country } from '../model/country.model';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  //myform: FormGroup;
  data!: [];
  countries : country[];

  constructor(private initService: InitService) { }

  ngOnInit(): void {
  
    /*this.myform = new FormGroup({
      id: new FormControl(),
      isoCode: new FormControl(),
      name: new FormControl(),
    });*/

     this.initService.getAllCountries().subscribe((res: any)=>{
      this.data = res;
      
      this.countries = res;
      console.log(this.countries);
    });
  

   // this.refreshData();
  }

  refreshData(){
    this.initService.getAllCountries().subscribe((res: any)=>{
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
  }

  onSubmit(){
    if (this.myform.valid) {
        this.initService.saveCountry(this.myform).subscribe((res: any) => {
          this.refreshData();          
          this.myform.reset();
        });
      }
  }
*/
}