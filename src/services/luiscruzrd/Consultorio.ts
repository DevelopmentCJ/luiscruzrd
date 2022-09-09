import { Consultorio } from "@/interfaces/Consultorio";
import { AxiosResponse } from "axios";
import axios from "./axios";

//Básicos----------------------------------------------------------------------------------------------------
//Cargar Registros
export const createConsultorioa = async (
  consultorio: Consultorio
): Promise<AxiosResponse> => await axios.post("/consultorios/Savea", consultorio);

// Crear un Solo Registro
export const createConsultorio = async (consultorio: Consultorio): Promise<AxiosResponse> =>
  await axios.post("/consultorios/Save", consultorio);

// Leer Todos los registros
export const getConsultorios = async (): Promise<AxiosResponse<Consultorio[]>> =>
  await axios.get("/consultorios/get");

//Leer un solo Registro por ID
export const getConsultorio = async (id: string): Promise<AxiosResponse<Consultorio>> =>
  await axios.get(`/consultorios/GetById/${id}`);

//Leer el último Registro
export const getOneConsultorio = async (): Promise<AxiosResponse<Consultorio>> =>
  await axios.get("/consultorios/GetOne");

//Actualizar un Registro
export const updateConsultorio = async (
  id: string,
  newConsultorio: Consultorio
): Promise<AxiosResponse<Consultorio>> =>
  await axios.put(`/consultorios/Update/${id}`, newConsultorio);

//Actualizar todos los Registros

//Eliminar un Registro
export const deleteConsultorio = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/consultorios/Delete/${id}`);

//Eliminar todos los Registros
export const eliminateConsultorios = async (
  consultorio: Consultorio
): Promise<AxiosResponse> => await axios.post("/consultorios/delete", consultorio);

//Reportes----------------------------------------------------------------------------------------------------
// Get Consultorios Agrupadas por Estatus
export const getconsultoriosCant = async (): Promise<AxiosResponse<Consultorio[]>> =>
  await axios.get("/consultorios/getGpedByStat");

// Get Consultorios Agrupadas por Cliente
export const getfactsGpedByCli = async (): Promise<AxiosResponse<Consultorio[]>> =>
  await axios.get("/consultorios/getfactsGpedByCli");

//Funciones----------------------------------------------------------------------------------------------------
//Actualizar Un Registro
export const updateOne = async (consultorio: Consultorio): Promise<AxiosResponse> =>
  await axios.post("/consultorios/updateOne", consultorio);

// Leer todas las consultorios por Aseguradora
export const GetByArs = async (aseguradoras: Consultorio): Promise<AxiosResponse> =>
  await axios.post("/consultorios/GetByArs", aseguradoras);
