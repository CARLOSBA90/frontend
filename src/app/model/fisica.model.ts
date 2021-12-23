import { titular } from './titular.model';
export class fisica extends titular {
  nombre: string;
  apellido: string;
  cc: number;

  constructor() {
    super();
    this.nombre = '';
    this.apellido = '';
    this.cc = 0;
  }
  getFisica() {
    return this.nombre + ' ' + this.apellido + ' ' + this.cc;
  }
}
