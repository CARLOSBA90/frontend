export class titular {
	id: number;
	rut: string;

	constructor(){
	}

	getCountry(){
		return this.id + ' ' + this.rut
	}


}
