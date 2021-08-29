export class country {
	id: number;
	isoCode: string;
	name: string;

	constructor(){
		this.id= 0;
		this.isoCode= "";
        this.name= "";
	}

	getCountry(){
		return this.id + ' ' + this.isoCode + ' ' + this.name
	}


}