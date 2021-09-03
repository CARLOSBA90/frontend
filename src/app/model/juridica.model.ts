import { titular } from './titular.model';
export class juridica extends titular {
	razonSocial: string;
	anioFundacion: number;

	constructor(){
		super();
	}

	getJuridica(){
		return this.razonSocial + ' ' + this.anioFundacion
	}


}
