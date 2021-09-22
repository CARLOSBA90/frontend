import { titular } from './titular.model';
export class juridica extends titular {
	razonSocial: string;
	anioFundacion: number;

	constructor(){
		super();
    this.razonSocial = '';
    this.anioFundacion = 0;
	}

	getJuridica(){
		return this.razonSocial + ' ' + this.anioFundacion
	}


}
