import { Producto } from "@/interfaces/Producto";
import { AxiosResponse } from "axios";
import axios from "./axios";

//Básicos----------------------------------------------------------------------------------------------------
//Cargar Registros
export const createProductoa = async (
  producto: Producto
): Promise<AxiosResponse> => await axios.post("/productos/Savea", producto);

// Crear un Solo Registro
export const createProducto = async (
  producto: Producto
): Promise<AxiosResponse> => await axios.post("/productos/Save", producto);

// Leer Todos los registros
export const getProductos = async (): Promise<AxiosResponse<Producto[]>> =>
  await axios.get("/productos/get");

//Leer un solo Registro por ID
export const getProducto = async (
  id: string
): Promise<AxiosResponse<Producto>> =>
  await axios.get(`/productos/GetById/${id}`);

//Leer el último Registro
export const getOneProducto = async (): Promise<AxiosResponse<Producto>> =>
  await axios.get("/productos/GetOne");

//Actualizar un Registro
export const updateProducto = async (
  id: string,
  newProducto: Producto
): Promise<AxiosResponse<Producto>> =>
  await axios.put(`/productos/Update/${id}`, newProducto);

//Actualizar todos los Registros

//Eliminar un Registro
export const deleteProducto = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/productos/Delete/${id}`);

//Eliminar todos los Registros
export const eliminateProductos = async (
  producto: Producto
): Promise<AxiosResponse> => await axios.post("/productos/delete", producto);

//Reportes----------------------------------------------------------------------------------------------------
// Get Productos Agrupados por Día
export const getproddayli = async (): Promise<AxiosResponse<Producto[]>> =>
  await axios.get("/productos/getproddayli");

// Get Productos Agrupadas por Estatus
export const getproductosCant = async (): Promise<AxiosResponse<Producto[]>> =>
  await axios.get("/productos/getGpedByStat");

// Get Productos Agrupadas por Cliente
export const getfactsGpedByCli = async (): Promise<AxiosResponse<Producto[]>> =>
  await axios.get("/productos/getfactsGpedByCli");

//Funciones----------------------------------------------------------------------------------------------------
//Actualizar Un Registro
export const updateOne = async (producto: Producto): Promise<AxiosResponse> =>
  await axios.post("/productos/updateOne", producto);

// Leer todas las productos por Aseguradora
export const GetByArs = async (
  aseguradoras: Producto
): Promise<AxiosResponse> =>
  await axios.post("/productos/GetByArs", aseguradoras);
