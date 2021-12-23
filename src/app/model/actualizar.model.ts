export class actualizar {

   private id : number;
   private type : number;

  constructor(id : number, type : number){
    this.id = id;
    this.type = type;
  }

  getId(){
    return this.id;
  }
  getType(){
    return this.type;
  }
}

