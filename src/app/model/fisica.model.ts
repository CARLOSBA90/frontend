import { titular } from './titular.model';
export class fisica extends titular {
	nombre: string;
	apellido: number;
    cc: number;

	constructor(){
		super();
	}

	getFisica(){
		return this.nombre + ' ' + this.apellido + ' ' + this.cc
	}


}
