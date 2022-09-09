import { Empleado } from "@/interfaces/Empleado";
import { AxiosResponse } from "axios";
import axios from "./axios";

//Básicos----------------------------------------------------------------------------------------------------
//Cargar Registros
export const createEmpleadoa = async (
  empleado: Empleado
): Promise<AxiosResponse> => await axios.post("/empleados/Savea", empleado);

// Crear un Solo Registro
export const createEmpleado = async (empleado: Empleado): Promise<AxiosResponse> =>
  await axios.post("/empleados/Save", empleado);

// Leer Todos los registros
export const getEmpleados = async (): Promise<AxiosResponse<Empleado[]>> =>
  await axios.get("/empleados/get");

//Leer un solo Registro por ID
export const getEmpleado = async (id: string): Promise<AxiosResponse<Empleado>> =>
  await axios.get(`/empleados/GetById/${id}`);

//Leer el último Registro
export const getOneEmpleado = async (): Promise<AxiosResponse<Empleado>> =>
  await axios.get("/empleados/GetOne");

//Actualizar un Registro
export const updateEmpleado = async (
  id: string,
  newEmpleado: Empleado
): Promise<AxiosResponse<Empleado>> =>
  await axios.put(`/empleados/Update/${id}`, newEmpleado);

//Actualizar todos los Registros

//Eliminar un Registro
export const deleteEmpleado = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/empleados/Delete/${id}`);

//Eliminar todos los Registros
export const eliminateEmpleados = async (
  empleado: Empleado
): Promise<AxiosResponse> => await axios.post("/empleados/delete", empleado);

//Reportes----------------------------------------------------------------------------------------------------
// Get Empleados Agrupadas por Estatus
export const getempleadosCant = async (): Promise<AxiosResponse<Empleado[]>> =>
  await axios.get("/empleados/getGpedByStat");

// Get Empleados Agrupadas por Cliente
export const getfactsGpedByCli = async (): Promise<AxiosResponse<Empleado[]>> =>
  await axios.get("/empleados/getfactsGpedByCli");

//Funciones----------------------------------------------------------------------------------------------------
//Actualizar Un Registro
export const updateOne = async (empleado: Empleado): Promise<AxiosResponse> =>
  await axios.post("/empleados/updateOne", empleado);

// Leer todas las empleados por Aseguradora
export const GetByArs = async (aseguradoras: Empleado): Promise<AxiosResponse> =>
  await axios.post("/empleados/GetByArs", aseguradoras);
