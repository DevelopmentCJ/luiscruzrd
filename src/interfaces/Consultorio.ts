export interface Consultorio {
  // Generales
  id: null;
  no: number;
  userReg: String;
  userMod: String;
  // Entidad
  edificio: String;
  planta: String;
  descripcion: String;
  responsible: String;
  ultimoPago: Date;
  notas: String;
  numero: String;
  monto: Number;
}
