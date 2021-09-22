export class titular {
	id: number;
	rut: string;


	constructor(){
    this.id = 0;
    this.rut = '';
	}

	getTitular(){
		return this.id + ' ' + this.rut
	}


}
