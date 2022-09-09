import { Medico } from "@/interfaces/Medico";
import { AxiosResponse } from "axios";
import axios from "./axios";

//Básicos----------------------------------------------------------------------------------------------------
//Cargar Registros
export const createMedicoa = async (
  medico: Medico
): Promise<AxiosResponse> => await axios.post("/medicos/Savea", medico);

// Crear un Solo Registro
export const createMedico = async (medico: Medico): Promise<AxiosResponse> =>
  await axios.post("/medicos/Save", medico);

// Leer Todos los registros
export const getMedicos = async (): Promise<AxiosResponse<Medico[]>> =>
  await axios.get("/medicos/get");

//Leer un solo Registro por ID
export const getMedico = async (id: string): Promise<AxiosResponse<Medico>> =>
  await axios.get(`/medicos/GetById/${id}`);

//Leer el último Registro
export const getOneMedico = async (): Promise<AxiosResponse<Medico>> =>
  await axios.get("/medicos/GetOne");

//Actualizar un Registro
export const updateMedico = async (
  id: string,
  newMedico: Medico
): Promise<AxiosResponse<Medico>> =>
  await axios.put(`/medicos/Update/${id}`, newMedico);

//Actualizar todos los Registros

//Eliminar un Registro
export const deleteMedico = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/medicos/Delete/${id}`);

//Eliminar todos los Registros
export const eliminateMedicos = async (
  medico: Medico
): Promise<AxiosResponse> => await axios.post("/medicos/delete", medico);

//Reportes----------------------------------------------------------------------------------------------------
// Get Medicos Agrupadas por Estatus
export const getmedicosCant = async (): Promise<AxiosResponse<Medico[]>> =>
  await axios.get("/medicos/getGpedByStat");

// Get Medicos Agrupadas por Cliente
export const getfactsGpedByCli = async (): Promise<AxiosResponse<Medico[]>> =>
  await axios.get("/medicos/getfactsGpedByCli");

//Funciones----------------------------------------------------------------------------------------------------
//Actualizar Un Registro
export const updateOne = async (medico: Medico): Promise<AxiosResponse> =>
  await axios.post("/medicos/updateOne", medico);

// Leer todas las medicos por Aseguradora
export const GetByArs = async (aseguradoras: Medico): Promise<AxiosResponse> =>
  await axios.post("/medicos/GetByArs", aseguradoras);
