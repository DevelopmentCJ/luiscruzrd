import { Activo } from "@/interfaces/Activo";
import { AxiosResponse } from "axios";
import axios from "./axios";

//Básicos----------------------------------------------------------------------------------------------------
//Cargar Registros
export const createActivoa = async (
  activo: Activo
): Promise<AxiosResponse> => await axios.post("/activos/Savea", activo);

// Crear un Solo Registro
export const createActivo = async (activo: Activo): Promise<AxiosResponse> =>
  await axios.post("/activos/Save", activo);

// Leer Todos los registros
export const getActivos = async (): Promise<AxiosResponse<Activo[]>> =>
  await axios.get("/activos/get");

//Leer un solo Registro por ID
export const getActivo = async (id: string): Promise<AxiosResponse<Activo>> =>
  await axios.get(`/activos/GetById/${id}`);

//Leer el último Registro
export const getOneActivo = async (): Promise<AxiosResponse<Activo>> =>
  await axios.get("/activos/GetOne");

//Actualizar un Registro
export const updateActivo = async (
  id: string,
  newActivo: Activo
): Promise<AxiosResponse<Activo>> =>
  await axios.put(`/activos/Update/${id}`, newActivo);

//Actualizar todos los Registros

//Eliminar un Registro
export const deleteActivo = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/activos/Delete/${id}`);

//Eliminar todos los Registros
export const eliminateActivos = async (
  activo: Activo
): Promise<AxiosResponse> => await axios.post("/activos/delete", activo);

//Reportes----------------------------------------------------------------------------------------------------
// Get Activos Agrupadas por Estatus
export const getactivosCant = async (): Promise<AxiosResponse<Activo[]>> =>
  await axios.get("/activos/getGpedByStat");

// Get Activos Agrupadas por Cliente
export const getfactsGpedByCli = async (): Promise<AxiosResponse<Activo[]>> =>
  await axios.get("/activos/getfactsGpedByCli");

//Funciones----------------------------------------------------------------------------------------------------
//Actualizar Un Registro
export const updateOne = async (activo: Activo): Promise<AxiosResponse> =>
  await axios.post("/activos/updateOne", activo);

// Leer todas las activos por Aseguradora
export const GetByArs = async (aseguradoras: Activo): Promise<AxiosResponse> =>
  await axios.post("/activos/GetByArs", aseguradoras);
