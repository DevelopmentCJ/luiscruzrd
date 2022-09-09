<template v-show="!cargando">
  <!-- {{ this.productos }} -->
  <!-- <h1>Subs: {{ this.subs }}</h1>
  <h1>PreSubs: {{ this.preSubs }}</h1> -->

  <!-- {{ this.currentEdition }} -->
  <!-- {{ this.seguros2.length }} -->
  <div>
    <div>
      <Navbar />
      <!-- {{ formatDate(this.producto.ultimoPago) }}<br /> -->
      <!-- {{ formatDate(this.fechaActual) }}<br /> -->
      <!-- {{
        formatDate(this.fechaActual) -
          formatDate(this.producto.ultimoPago) -
          1
      }}<br />
      {{
        (formatDate(this.fechaActual) -
          formatDate(this.producto.ultimoPago)) *
          this.producto.monto
      }} -->
      <Transition>
        <div v-if="cargando" class="spin">
          <img class="img" src="@/assets/images/logo.png" />
        </div>
      </Transition>

      <div v-if="showModal" class="modal">
        <div class="contenedor">
          <header>Consulta</header>
          <div class="contenido">
            <label @click="this.showModalMethod()" for="btn-modal">X</label>
            <div class="contenido">
              <div>
                <textarea
                  rows="12"
                  id="showInComentary"
                  type="showInComentary"
                  v-model="currentEdition.description"
                  class="form-control"
                />
              </div>
              <!-- <button class="btn btn-primary" @click.prevent="actualizar()">
                <i class="fas fa-check"></i> Actualizar
              </button>
              &nbsp;
              <button class="btn btn-danger" @click.prevent="cancelar()">
                <i class="fas fa-undo"></i> Cancelar
              </button> -->
              <!-- {{ this.showInComentary }} -->
            </div>
          </div>
        </div>
      </div>

      <div v-if="showModal7" class="modal7">
        <div class="contenedor7">
          <header>Productos</header>
          <div class="contenido7">
            <label @click="this.showModalMethod7()" for="btn-modal">X</label>
            <div class="contenido7">
              <!-- <div>
                <input
                  id="search"
                  type="search"
                  v-model="search"
                  class="form-control"
                  @keypress="buscar()"
                />
              </div> -->
              <table id="customers">
                <tr>
                  <!-- <th>Descripción</th> -->
                  <th>Referencia</th>
                  <th>Lote</th>
                  <th>Cantidad</th>
                </tr>
                <tr
                  v-for="(item, index) in productos"
                  :key="index"
                  @click="redirect(item._id)"
                >
                  <!-- <td>{{ item.desc }}</td> -->
                  <td>{{ item.ref }}</td>
                  <td>{{ item.lote }}</td>
                  <td>{{ item.cant }}</td>
                </tr>
                <!-- <tr>
                  <td>Total: {{ formatNumber(this.totales.productos) }}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="der"></td>
                </tr> -->
              </table>

              <!-- <div>
                <p
                  class="ars"
                  style="cursor: pointer"
                  v-for="(seguro, index) in seguros2"
                  :key="index"
                  @click="setSeguro(seguro.nomb, seguro.apell)"
                >
                  {{ seguro.nomb }} {{ seguro.apell }}
                </p>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div v-show="!cargando" class="general">
        <h6 :class="isError(error)">{{ error }}</h6>
        <form>
          <fieldset>
            <h6>{{ encabezado }}</h6>
            <label class="form-label"><b>Información General</b></label>
            <div class="grid">
              <!-- <div>
                <label class="ta-l col-form-label col-form-label-sm" for="fecha"
                  >Fecha:</label
                ><input
                  id="fecha"
                  type="Date"
                  v-model="producto.fecha"
                  class="form-control"
                />
              </div> -->
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="barcode"
                  >Código Barra:</label
                ><input
                  id="barcode"
                  @keypress.enter="changeFocus()"
                  type="barcode"
                  v-model="producto.barcode"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="division"
                  >División:</label
                ><input
                  id="division"
                  type="division"
                  v-model="producto.division"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="lineaGrupo"
                  >Línea / Grupo:</label
                ><input
                  id="lineaGrupo"
                  type="lineaGrupo"
                  v-model="producto.lineaGrupo"
                  class="form-control"
                />
              </div>
              <!-- <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="codigo"
                  >Código Producto:</label
                ><input
                  id="codigo"
                  type="codigo"
                  v-model="producto.codigo"
                  class="form-control"
                />
              </div> -->
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="present"
                  >Presentación:</label
                ><input
                  id="present"
                  type="present"
                  v-model="producto.present"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="desc"
                  >Descripción:</label
                ><input
                  id="desc"
                  type="desc"
                  v-model="producto.desc"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="uniMed"
                  >Empaque:</label
                ><select
                  id="uniMed"
                  type="uniMed"
                  v-model="producto.uniMed"
                  class="form-select"
                >
                  <option>Unidad</option>
                  <option>Paquete</option>
                  <option>Caja</option>
                </select>
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="equiv"
                  >Equivalencia:</label
                ><input
                  id="equiv"
                  type="Number"
                  v-model="producto.equiv"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="ref"
                  >Referencia:</label
                ><input
                  id="ref"
                  type="ref"
                  v-model="producto.ref"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="vence"
                  >Vencimiento:</label
                ><input
                  id="vence"
                  type="month"
                  v-model="producto.vence"
                  class="form-control"
                  @change="calcVenc(producto.vence)"
                />
              </div>
              <!-- <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="mesVenc"
                  >Mes Vencimiento:</label
                ><input
                  id="mesVenc"
                  type="Number"
                  v-model="producto.mesVenc"
                  class="form-control"
                />
              </div> -->
              <!-- <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="anoVenc"
                  >Año Vencimiento:</label
                ><input
                  id="anoVenc"
                  type="Number"
                  v-model="producto.anoVenc"
                  class="form-control"
                />
              </div> -->
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="lote"
                  >Lote:</label
                ><input
                  id="lote"
                  type="lote"
                  v-model="producto.lote"
                  class="form-control"
                />
              </div>

              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="farmaco"
                  >Fármaco:</label
                ><input
                  id="farmaco"
                  type="farmaco"
                  v-model="producto.farmaco"
                  class="form-control"
                />
              </div>
            </div>
            <label class="form-label"><b>Orígen del Producto</b></label>
            <div class="grid">
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="fab"
                  >Fabricante:</label
                ><input
                  id="fab"
                  type="fab"
                  v-model="producto.fab"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="supdr"
                  >Suplidor:</label
                ><input
                  id="supdr"
                  type="supdr"
                  v-model="producto.supdr"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="regInd"
                  >Registro Industrial:</label
                ><input
                  id="regInd"
                  type="regInd"
                  v-model="producto.regInd"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="regSan"
                  >Registro Sanitario:</label
                ><input
                  id="regSan"
                  type="regSan"
                  v-model="producto.regSan"
                  class="form-control"
                />
              </div>
            </div>
            <!-- <label class="form-label"><b>Precio de Venta / Servicio</b></label>
            <div class="grid">
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="precVenta"
                  >Precio x Unid.:</label
                ><input
                  id="precVenta"
                  type="Number"
                  min="0"
                  v-model="producto.precVenta"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="precCaja"
                  >Precio x Caja:</label
                ><input
                  id="precCaja"
                  type="Number"
                  min="0"
                  v-model="producto.precCaja"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="itbis"
                  >ITBIS:</label
                ><input
                  id="itbis"
                  type="Number"
                  min="0"
                  v-model="producto.itbis"
                  class="form-control"
                />
              </div>
            </div> -->
            <!-- <label class="form-label"><b>Precio de Compras</b></label>
            <div class="grid">
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="costoUnit"
                  >Costo x Unid.:</label
                ><input
                  id="costoUnit"
                  type="Number"
                  min="0"
                  v-model="producto.costoUnit"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="costCaja"
                  >Costo x Caja:</label
                ><input
                  id="costCaja"
                  type="Number"
                  min="0"
                  v-model="producto.costCaja"
                  class="form-control"
                />
              </div>
            </div> -->
            <label class="form-label"><b>Existencia</b></label>
            <div class="grid">
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="almacn"
                  >Almacén:</label
                ><select
                  id="almacn"
                  type="almacn"
                  v-model="producto.almacn"
                  class="form-select"
                  @change="defSubs()"
                >
                  <option v-for="(almacen, index) in almacenes" :key="index">{{
                    almacen.desc
                  }}</option>
                </select>
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="subAlmacn"
                  >Sub Almacén:</label
                ><select
                  id="subAlmacn"
                  type="subAlmacn"
                  v-model="producto.subAlmacn"
                  class="form-select"
                >
                  <option v-for="(sub, index) in subs" :key="index">{{
                    sub
                  }}</option>
                </select>
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="cant"
                  >Cantidad:</label
                ><input
                  id="cant"
                  type="Number"
                  min="0"
                  step="1"
                  v-model="producto.cant"
                  class="form-control"
                />
              </div>
            </div>

            <div class="grid-consultas">
              <!-- <ul>
                <li
                  v-for="(consulta, index) in producto.consultas"
                  :key="index"
                >
                  <a href="#">
                    <h2>
                      No. {{ index + 1 }} - {{ newFormatDate(consulta.date) }}
                      <i
                        @click.prevent="deleteService(index)"
                        style="cursor:pointer"
                        class="fas fa-minus-circle redOption"
                      ></i>
                      &nbsp;
                      <i
                        @click.prevent="editService(index, consulta)"
                        style="cursor:pointer"
                        class="fas fa-edit greenOption"
                      ></i>
                    </h2>
                    <p>{{ consulta.description }}</p>
                  </a>
                </li>
              </ul> -->

              <div
                v-for="(consulta, index) in producto.consultas"
                :key="index"
                class="card-body"
              >
                <p style="font-weight: bold">
                  No. {{ index + 1 }} - {{ newFormatDate(consulta.date) }}
                  <i
                    @click.prevent="deleteService(index)"
                    style="cursor:pointer"
                    class="fas fa-minus-circle redOption"
                  ></i>
                  &nbsp;
                  <i
                    @click.prevent="editService(index, consulta)"
                    style="cursor:pointer"
                    class="fas fa-edit greenOption"
                  ></i>
                </p>
                <p>{{ consulta.description }}</p>

                <!-- <table id="customers">
                <tr>
                  <th>No.</th>
                  <th>Fecha</th>
                  <th>Consulta</th>
                  <th></th>
                </tr>
                <tr
                  v-for="(consulta, index) in producto.consultas"
                  :key="index"
                >
                  <td class="input-r">{{ index + 1 }}</td>
                  <td>{{ newFormatDate(consulta.date) }}</td>
                  <td>{{ consulta.description }}</td>
                  <td>
                    <i
                      @click.prevent="deleteService(index)"
                      style="cursor:pointer"
                      class="fas fa-minus-circle redOption"
                    ></i>
                    &nbsp;
                    <i
                      @click.prevent="editService(index, consulta)"
                      style="cursor:pointer"
                      class="fas fa-edit greenOption"
                    ></i>
                  </td>
                </tr>
              </table> -->
              </div>
            </div>

            <button
              v-if="this.modoForm == 'add'"
              class="btn btn-primary"
              @click.prevent="saveProducto()"
              :disabled="
                !producto.fecha ||
                  !producto.division ||
                  !producto.lineaGrupo ||
                  !producto.present ||
                  !producto.uniMed ||
                  !producto.equiv ||
                  !producto.desc ||
                  !producto.ref ||
                  !producto.vence ||
                  !producto.mesVenc ||
                  !producto.anoVenc ||
                  !producto.lote ||
                  !producto.barcode ||
                  !producto.farmaco ||
                  !producto.fab ||
                  !producto.supdr ||
                  !producto.regInd ||
                  !producto.regSan ||
                  !producto.almacn ||
                  !producto.cant
              "
            >
              <i class="fas fa-save"></i> Guardar
            </button>

            <button
              v-if="this.modoForm == 'show'"
              class="btn btn-success"
              @click.prevent="handleUpdate()"
              :disabled="
                !producto.fecha ||
                  !producto.division ||
                  !producto.lineaGrupo ||
                  !producto.present ||
                  !producto.uniMed ||
                  !producto.equiv ||
                  !producto.desc ||
                  !producto.ref ||
                  !producto.vence ||
                  !producto.mesVenc ||
                  !producto.anoVenc ||
                  !producto.lote ||
                  !producto.barcode ||
                  !producto.farmaco ||
                  !producto.fab ||
                  !producto.supdr ||
                  !producto.regInd ||
                  !producto.regSan ||
                  !producto.almacn ||
                  !producto.cant
              "
            >
              <i class="fas fa-save"></i> Actualizar
            </button>

            <!-- <button
              v-if="this.modoForm == 'show'"
              class="btn btn-warning"
              @click="this.$router.push(`/productos2/${producto._id}`)"
            >
              <i class="fas fa-print"></i> Imprimir
            </button> -->

            <button
              v-if="showDelete"
              class="btn btn-danger"
              @click.prevent="handleDelete()"
            >
              <i class="fas fa-trash-alt"></i> Eliminar
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import { defineComponent } from "vue";
import { Producto } from "@/interfaces/Producto";
// import { Funcion } from "@/interfaces/Funcion";
// import { Vitola } from "@/interfaces/Vitola";
// import { Producto } from "@/interfaces/Producto";
// import {
//   getPeg,
//   getMez,
//   getEmp,
// } from "@/services/luiscruzrd/Producto";
// import { getLigas } from "@/services/luiscruzrd/Liga";
import {
  createProducto,
  eliminateProductos,
  createProductoa,
  getOneProducto,
  deleteProducto,
  getProducto,
  updateProducto,
} from "@/services/luiscruzrd/Producto";
// import { getVitolas } from "@/services/luiscruzrd/Vitola";
// import { getFuncions } from "@/services/luiscruzrd/Funcion";
import { createMensaje } from "@/services/luiscruzrd/ChatService";
import { getProductos } from "@/services/luiscruzrd/Producto";
import numeral from "numeral";
import moment from "moment";
// import Pusher from "pusher-js";

export default defineComponent({
  name: "productos-form",
  components: {
    Navbar,
  },
  data() {
    return {
      productos: [] as Producto[],
      subs: [],
      preSubs: [],
      almacenes: [
        {
          desc: "Almacén No. 01 (General)",
          subs: ["Donaciones", "Venta / Servicios", "Muestras Médicas"],
        },
        {
          desc: "Almacén No. 02 (Suministro de Oficina y Limpieza)",
          subs: [
            "Sub-01 (Materiales de Oficina)",
            "Sub-02 (Materiales de Limpieza)",
          ],
        },
        {
          desc: "Almacén No. 03 (Abastecimiento)",
          subs: [
            "Sub-01 (Carro de Paro UCI)",
            "Sub-02 (Carro de Paro 2do Piso)",
            "Sub-03 (Carro de Paro Perinato)",
            "Sub-04 (Carro de Paro Quirófano)",
            "Sub-05 (Carro de Paro 3er Piso)",
          ],
        },
        {
          desc: "Almacén No. 04 (Emergencia, Quirófano y Ambulatorio)",
          subs: [
            "Sub-01 (Emergencia)",
            "Sub-02 (Depósito Quirófano)",
            "Sub-03 (Imágenes)",
            "Sub-04 (Laboratorio Clínico)",
            "Sub-05 (Laboratorio Biomolecular)",
            "Sub-06 (Farmacia 3er Piso)",
            "Sub-07 (Emergencia Pediatrica)",
          ],
        },
        {
          desc: "Almacén No. 70 (Cocina)",
          subs: [
            "Sub-01 (Alimentos)",
            "Sub-02 (Bebidas y Líquidos)",
            "Sub-03 (Suministros)",
            "Sub-04 (Utencilios)",
          ],
        },
        {
          desc: "Almacén No. 98 (Vencidos)",
          subs: [],
        },
        {
          desc: "Almacén No. 99 (Averiado)",
          subs: [],
        },
      ],
      num1: 0,
      num2: 0,
      fechaActual: "",
      search: "",
      seguros2: [],
      seguros: [
        "NINGUNO",
        "ARS CMD",
        "MAPFRE SALUD ARS, S.A.",
        "FUTURO",
        "META SALUD",
        "YUNEN",
        "RESERVAS",
        "MONUMENTAL",
        "ASEMAP",
        "ARS APS S A",
        "SIMAG",
        "RENACER",
        "GRUPO MEDICO ASOCIADO",
        "PRIMERA ARS DE HUMANO",
        "UNIVERSAL",
        "HUMANO SEGUROS",
        "SENASA CONTRIBUTIVO",
        "SENASA SUBSIDIADO",
        "SEMMA",
        "IDOPPRIL",
        "ARS UASD",
        "OTRA",
      ],
      currentEdition: {} as any,
      // vitolas: [] as Vitola[],
      // productos: [] as Producto[],
      // productosEmp: [] as Producto[],
      // productosPeg: [] as Producto[],
      // productosMez: [] as Producto[],
      campoFocus: "barcode",
      mensageError: "Error",
      mensageExito: "Producto Registrado Exitosamente",
      mensageConfirm: "¿Está Seguro que desea Eliminar Este Producto?",
      encabezado: "",
      modoForm: "",
      // funciones: [] as Funcion[],
      showDatosPadre: false,
      showDatosMadre: false,
      showDatosTutor: false,
      message: {
        username: "Ronnald",
        message: "Hola",
      },
      documento: {} as any,
      error: "",
      respuesta: {},
      actividad: "",
      showAlert: false,
      loadedAfiliado: {},
      cargando: false,
      producto: {} as Producto,
      oneProducto: {} as Producto,
      one: {},
      nextNo: Number,
      productoSelected: [],
      clienteSelected: [],
      descripcionCliente: "",

      showInComentary: "",
      showModal: false,
      showModal7: false,
      showDelete: false,
      currentConsulta: "",
      estado: {} as object,
    };
  },

  async mounted() {
    this.fechaActual = new Date();
    // this.loadProductos();
    // this.seguros = [
    //   "Victor Osiris Alcántara Castro",
    //   "Abel David Ventura Rivas",
    // ];
    if (this.$route.fullPath == "/productos/new") {
      this.modoForm = "add";
      this.encabezado = "Nuevo Producto";
    } else {
      this.modoForm = "show";
      this.encabezado = "Detalles de Producto";
    }

    if (this.modoForm == "add") {
      this.producto.no = 1;
      this.producto.consultas = [];
      this.fillFields();
      this.fixTime();
    } else {
      this.showDeleteMethod();
      if (typeof this.$route.params.id === "string") {
        await this.loadProducto(this.$route.params.id);
        this.defSubs();

        // this.producto.finVac = new Date();
        // this.producto.fechaNac = new Date();
        // this.producto.fechaCont = new Date();
      }
      this.fixTime();
    }

    this.focus();
    // this.loadProductos();
    // this.loadLigas();
    // this.loadVitolas();
    // this.filterProductos();
  },

  methods: {
    async redirect(id: string) {
      // alert("Redirecting");
      this.$router.push(`/productos/${id}`);

      // Remounted
      this.modoForm = "show";
      this.encabezado = "Detalles de Producto";
      this.showDeleteMethod();
      await this.loadProducto(id);
      this.defSubs();

      // this.producto.finVac = new Date();
      // this.producto.fechaNac = new Date();
      // this.producto.fechaCont = new Date();
      this.fixTime();
      this.focus();

      this.showModalMethod7();
    },

    async buscando() {
      this.toggleLoading();
      try {
        const res = await getProductos();
        this.productos = res.data;
      } catch (error) {
        // console.error(error);
      }
      if (this.producto.barcode !== "Todos") {
        this.productos = this.productos.filter((producto: Producto) => {
          return producto.barcode
            .toLowerCase()
            .includes(this.producto.barcode.toLowerCase());
        });
      }
      this.toggleLoading();
    },

    async changeFocus() {
      document.getElementById("division").focus();
      await this.buscando();
      this.showModalMethod7();
    },
    calcVenc(date: any) {
      this.producto.mesVenc = moment(date).format("MM");
      this.producto.anoVenc = moment(date).format("YYYY");
    },

    defSubs() {
      this.preSubs = this.almacenes.filter((almacen: Producto) => {
        return almacen.desc
          .toLowerCase()
          .includes(this.producto.almacn.toLowerCase());
      });
      this.subs = this.preSubs[0].subs;
    },

    setSeguro(seguro: string, seguro2: string) {
      this.producto.supervisor = seguro + " " + seguro2;
      this.showModalMethod7();
      this.search = "";
      document.getElementById("cod").focus();
    },

    buscar(term: string) {
      this.seguros2 = this.seguros;
      if (term !== "") {
        this.seguros2 = this.seguros.filter((seguro: string) => {
          return seguro.toLowerCase().includes(this.search.toLowerCase());
        });
      }
      if (this.seguros2.length == 1) {
        if (confirm("¿" + this.seguros2[0] + "?")) {
          this.setSeguro(this.seguros2[0]);
          document.getElementById("cod").focus();
        }
      }
    },

    showModalMethod7() {
      this.seguros2 = this.seguros;
      this.showModal7 = !this.showModal7;
      // document.getElementById("oficio").focus();
    },

    showModalMethod() {
      this.showModal = !this.showModal;
    },

    deleteService(it: any) {
      if (confirm("Está Seguro que desea Eliminar Esta Consulta?")) {
        this.producto.consultas.splice(it, 1);
      }
    },

    editService(index: number, consulta: any) {
      this.currentEdition = consulta;
      this.showModalMethod();
    },

    newFormatDate(dateValue: Date) {
      // let out = moment(dateValue).add(0, "h");
      // return moment(out).format("DD/MM/YYYY");
      moment.locale("es");
      return moment(dateValue).calendar();
      // .startOf("hour")
      // .fromNow();
    },

    async addActivity() {
      if (this.currentConsulta !== "") {
        this.producto.consultas.push({
          description: this.currentConsulta,
          date: new Date(),
        });
        this.currentConsulta = "";
      }
      document.getElementById("barcode").focus();
    },

    calcularEdad(date: any) {
      let years = 0;
      let edad = Math.floor(
        moment(new Date()).diff(moment(date, "YYYY-MM-DD"), "years", true)
      );
      if (edad > 120 || edad < 0) {
        years = 0;
      } else {
        years = edad;
      }
      this.producto.edad = years;
    },

    // async filterProductos() {
    //   this.toggleLoading();
    //   try {
    //     const res = await getPeg();
    //     this.productosPeg = res.data;
    //   } catch (error) {
    //     // console.error(error);
    //   }

    //   try {
    //     const res = await getEmp();
    //     this.productosEmp = res.data;
    //   } catch (error) {
    //     // console.error(error);
    //   }

    //   try {
    //     const res = await getMez();
    //     this.productosMez = res.data;
    //   } catch (error) {
    //     // console.error(error);
    //   }

    //   this.toggleLoading();
    // },

    // async loadLigas() {
    //   // this.toggleLoading();
    //   try {
    //     const res = await getLigas();
    //     this.ligas = res.data;
    //   } catch (error) {
    //     // console.error(error);
    //   }
    //   // this.toggleLoading();
    // },

    // async loadVitolas() {
    //   // this.toggleLoading();
    //   try {
    //     const res = await getVitolas();
    //     this.vitolas = res.data;
    //   } catch (error) {
    //     // console.error(error);
    //   }
    //   // this.toggleLoading();
    // },

    async loadProductos() {
      this.toggleLoading();
      try {
        const res = await getProductos();
        this.seguros = res.data;
      } catch (error) {
        // console.error(error);
      }
      this.toggleLoading();
    },

    fixTime() {
      if (this.producto.vence) {
        this.producto.vence = this.formatDateToFix(this.producto.vence, false);
      }
    },

    formatDateToFix(dateValue: Date, incTime: boolean) {
      if (incTime == true) {
        let out = moment(dateValue).add(0, "days");
        return moment(out).format("yyyy-MM-DDTHH:mm");
      } else {
        let out = moment(dateValue).add(4, "hours");
        return moment(out).format("yyyy-MM");
      }
    },

    async loadProducto(id: string) {
      this.toggleLoading();
      try {
        const { data } = await getProducto(id);
        this.producto = data;
        // this.fixTime();
      } catch (error) {
        //console.error(error);
      }
      this.toggleLoading();
    },

    async handleUpdate() {
      this.toggleLoading();
      try {
        if (typeof this.$route.params.id === "string") {
          this.producto.userMod = this.$store.state.user.usuario;
          await updateProducto(this.$route.params.id, this.producto);
          this.addMessage();
          this.$router.push("/productos");
        }
      } catch (error) {
        //console.error(error);
      }
      this.toggleLoading();
      // this.toggleAlert();
    },

    async handleDelete() {
      if (confirm(this.mensageConfirm)) {
        try {
          if (typeof this.$route.params.id === "string") {
            await deleteProducto(this.$route.params.id);
            this.addMessage();
            this.$router.push("/productos");
          }
        } catch (error) {
          //console.error(error);
        }
      }
    },

    showDeleteMethod() {
      if (this.$store.state.user.type == "Power User") {
        this.showDelete = true;
      }
    },

    toggleShowDatosPadre() {
      this.showDatosPadre = !this.showDatosPadre;
    },
    toggleShowDatosMadre() {
      this.showDatosMadre = !this.showDatosMadre;
    },
    toggleShowDatosTutor() {
      this.showDatosTutor = !this.showDatosTutor;
    },

    async addMessage() {
      try {
        const res = await createMensaje(this.message);
      } catch (error) {
        // console.error(error);
      }
    },

    isError(message: string) {
      if (message == this.mensageExito) {
        return "success";
      } else {
        return "error";
      }
    },

    toggleAlert() {
      this.showAlert = !this.showAlert;
    },
    calcProducto() {
      (this.producto.retension = this.producto.bruto * 0.1),
        (this.producto.neto = this.producto.bruto * 0.9);
    },
    formatNumber(value: number) {
      return numeral(value).format("00000000");
    },

    formatDate(dateValue: Date) {
      let out = moment(dateValue).add(4, "hours");
      return moment(out).format("MM");
    },

    formatDatePlus(dateValue: Date) {
      let out = moment(dateValue).add(30, "days");
      return moment(out).format("yyyy-MM-DTHH:mm");
    },

    fillFields() {
      this.producto.fecha = new Date();
      // this.producto.fechaNac = new Date();
      // this.producto.fechaCont = new Date();
    },

    async loadOneProducto() {
      try {
        const res = await getOneProducto();
        this.oneProducto = res.data;
        this.one = this.oneProducto[0];
        if (typeof this.one.no === "number") {
          this.nextNo = this.one.no + 1;
        } else {
          this.one.no = 0;
          this.nextNo = this.one.no + 1;
        }
        if (this.nextNo == null) {
          this.nextNo = 0;
        }
        this.producto.no = this.nextNo;
        this.producto.principal = this.nextNo;
        this.producto.principal = this.nextNo;
      } catch (error) {
        // console.error(error);
      }
    },

    async saveProductoa() {
      await this.loadOneProducto();
      try {
        const res = await createProductoa(this.producto);
        // // console.log(res);
      } catch (error) {
        // // console.error(error);
      }
    },

    async saveProducto() {
      this.toggleLoading();
      try {
        try {
          const res = await getOneProducto();
          this.oneProducto = res.data;
          this.one = this.oneProducto[0];
          this.nextNo = this.one.no + 1;
          this.producto.no = this.nextNo;
        } catch (error) {
          // // console.error(error);
        }
        this.producto.userReg = this.$store.state.user.usuario;
        const res = await createProducto(this.producto).then(
          (res) => {
            this.error = this.respuesta = res.data.title;
            // this.$router.push("/");
            this.res = res;
            this.respuesta = res.data;
            this.addMessage();
          },
          (err) => {
            // console.log(err.response);
            this.error = err.response.data.error;
          }
        );
        // this.$router.push("/productos/");
      } catch (error) {
        // // console.error(error);
      }
      await this.toggleLoading();
      if (this.error !== this.mensageError) {
        await this.cleanFields();
      }
      await this.fillFields();
      document.getElementById(this.campoFocus).focus();
      this.toggleAlert();
    },

    async deleteAllProductos() {
      try {
        const res = await eliminateProductos(this.producto);
        // // console.log(res);
      } catch (error) {
        // // console.error(error);
      }
    },

    cleanFields() {
      this.producto.fecha = "";
      this.producto.lineaGrupo = "";
      this.producto.codigo = "";
      this.producto.ref = "";
      this.producto.vence = "";
      this.producto.mesVenc = "";
      this.producto.anoVenc = "";
      this.producto.lote = "";
      this.producto.barcode = "";
      this.producto.farmaco = "";
      this.producto.regInd = "";
      this.producto.regSan = "";
      this.producto.precVenta = "";
      this.producto.precCaja = "";
      this.producto.itbis = "";
      this.producto.costoUnit = "";
      this.producto.costCaja = "";
      this.producto.solPor = "";
      this.producto.autPor = "";
      this.producto.cant = "";
    },

    toggleLoading() {
      this.cargando = !this.cargando;
    },

    focus() {
      document.getElementById(this.campoFocus).focus();
    },
    focus2() {
      document.getElementById(this.campoFocus2).focus();
    },
  },
});
</script>

<style lang="css" scoped>
/* Start Transition */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/* End Transition */

/* <!-------------------------------------------------- Menú --------------------------------------------------> */
* {
  box-sizing: border-box;
}

#btn-mas {
  display: none;
}
.container {
  position: fixed;
  bottom: 0%;
  left: 80%;
  z-index: 100;
}
.redes a,
.btn-mas label {
  display: block;
  text-decoration: none;
  color: #fff;
  width: 55px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0px 1px 10px rgba(5, 24, 250, 0.4);
  transition: all 500ms ease;
}
.redes a:hover {
  background: #fff;
  color: #2780e3;
}
.redes a {
  margin-bottom: -15px;
  opacity: 0;
  visibility: hidden;
}
#btn-mas:checked ~ .redes a {
  margin-bottom: 10px;
  opacity: 1;
  visibility: visible;
}
.btn-mas label {
  cursor: pointer;
  background: #2780e3;
  font-size: 23px;
}
#btn-mas:checked ~ .btn-mas label {
  transform: rotate(135deg);
  font-size: 25px;
  background-color: grey;
}

.green {
  background-color: green;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.orange {
  background-color: orange;
}

.yellow {
  background-color: yellow;
}

/* <!----------------------------------------------------------------------------------------------------------> */

.general {
  width: 100%;
  max-width: 1500px;
  margin: 0px auto;
}
.grid-consultas {
  display: grid;
  grid-auto-flow: dense;
  grid-template-rows: auto auto;
  gap: 3px;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}

.grid {
  display: grid;
  grid-auto-flow: dense;
  grid-template-rows: auto auto;
  gap: 3px;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}

.grid-2 {
  display: grid;
  grid-auto-flow: dense;
  grid-template-rows: auto auto;
  gap: 3px;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}

/* h4 {
  background-color: grey;
  color: white;
  text-align: center;
  box-shadow: 2px 2px 10px rgb(199, 199, 199);
} */

h6 {
  color: white;
  /* font-weight: bold; */
  text-align: center;
  background-color: rgb(255, 153, 0);
  /* background-color: rgb(147, 147, 147); */
}

h5 {
  font-size: 90%;
  color: rgb(147, 147, 147);
  font-weight: bold;
  text-align: center;
}

form {
  /* text-align:center;   */
  /* background-color: white; */
  /* box-shadow: 2px 2px 10px rgb(199, 199, 199); */
  /* border-radius: 4px; */
  padding: 2%;
}

legend {
  color: rgb(0, 0, 0);
  text-align: center;
}

input,
select,
textarea {
  border-radius: 7px;
  margin-bottom: 3px;
}

legend {
  margin: 0;
}

.form-label {
  background-color: rgb(220, 220, 220);
  width: 100%;
  /* color: rgb(0, 0, 0); */
  /* border-radius: 7px; */
}

.ta-l {
  text-align: left;
}

label {
  text-align: center;
}

.col-form-label {
  font-weight: bold;
  line-height: 0;
}

/* button {
  background-color: rgb(147, 147, 147);
  color: white;
  width: 100%;
  border-radius: 4px;
  margin-top: 30px;
} */

/* -------------------------------Loading... -------------------------------*/

@keyframes spinner {
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
}
.spin::before {
  animation: 1.5s linear infinite spinner;
  animation-play-state: inherit;
  border: solid 5px #cfd0d1;
  border-bottom-color: rgb(0, 0, 0);
  border-radius: 50%;
  content: "";
  height: 90px;
  width: 90px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  will-change: transform;
}

.img {
  pointer-events: none;
  /* opacity: 0.7; */
  width: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* -------------------------------**********-------------------------------*/

.input-r {
  text-align: right;
}

.error {
  color: white;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: rgb(255, 85, 85);
}

.success {
  color: white;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: rgb(0, 255, 0);
}

/* Tabla */
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 3px;
  cursor: pointer;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
  background-color: rgb(0, 0, 0);
  color: white;
}

td,
th {
  font-size: 75%;
}

/* ---------------------------------------- */
.redOption {
  color: red;
}

.greenOption {
  color: green;
}

/* Modal */
.modal {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  /* background: rgba(5, 24, 250, 0.1); */
  transition: all 500ms ease;
}

.contenedor {
  width: 700px;
  height: 300;
  margin: auto;
  background: #fff;
  box-shadow: 1px 7px 25px rgba(5, 24, 250, 0.6);
  transition: all 500ms ease;
  position: relative;
}

.contenedor header {
  padding: 10px;
  background: rgb(0, 0, 0);
  color: #fff;
}

.contenedor label {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.contenido {
  padding: 7px;
}

/* End Modal */

/* Modal 7 */
.modal7 {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  /* background: rgba(5, 24, 250, 0.1); */
  transition: all 500ms ease;
  overflow-y: scroll;
}

.contenedor7 {
  width: 350px;
  height: 350px;
  overflow-y: scroll;
  margin: auto;
  background: #fff;
  box-shadow: 1px 7px 25px rgba(5, 24, 250, 0.6);
  transition: all 500ms ease;
  position: relative;
}

.contenedor7 header {
  padding: 10px;
  background: rgb(0, 0, 0);
  color: #fff;
}

.contenedor7 label {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.contenido7 {
  padding: 7px;
}

.ars {
  margin: 0%;
  font-size: 12px;
}

/* End Modal */

/* Notas Adhesivas */
/* *{
  margin:0;
  padding:0;
} */

/* body{
  font-family:arial,sans-serif;
  font-size:100%;
  margin:1em;
  background:#666;
  color:#fff;
} */

/* h2,p{
  font-size:100%;
  font-weight:normal;
} */

ul,
li {
  list-style: none;
}
ul {
  overflow: hidden;
  padding: 3em;
}
ul li a {
  text-decoration: none;
  color: #000;
  background: #ffc;
  display: block;
  height: 20em;
  width: 15em;
  padding: 2em;
  -moz-box-shadow: 5px 5px 7px rgba(33, 33, 33, 1);
  -webkit-box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  -moz-transition: -moz-transform 0.15s linear;
  -o-transition: -o-transform 0.15s linear;
  -webkit-transition: -webkit-transform 0.15s linear;
}
ul li {
  margin: 1em;
  float: left;
}
ul li h2 {
  font-size: 100%;
  font-weight: bold;
  padding-bottom: 10px;
}
ul li p {
  font-family: "Reenie Beanie", arial, sans-serif;
  font-size: 100%;
}
ul li a {
  -webkit-transform: rotate(-6deg);
  -o-transform: rotate(-6deg);
  -moz-transform: rotate(-6deg);
}
ul li:nth-child(even) a {
  -o-transform: rotate(4deg);
  -webkit-transform: rotate(4deg);
  -moz-transform: rotate(4deg);
  position: relative;
  top: 5px;
  background: #cfc;
}
ul li:nth-child(3n) a {
  -o-transform: rotate(-3deg);
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  position: relative;
  top: -5px;
  background: #ccf;
}
ul li:nth-child(5n) a {
  -o-transform: rotate(5deg);
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  position: relative;
  top: -10px;
}
ul li a:hover,
ul li a:focus {
  box-shadow: 10px 10px 7px rgba(5, 24, 250, 0.7);
  -moz-box-shadow: 10px 10px 7px rgba(5, 24, 250, 0.7);
  -webkit-box-shadow: 10px 10px 7px rgba(5, 24, 250, 0.7);
  -webkit-transform: scale(1.25);
  -moz-transform: scale(1.25);
  -o-transform: scale(1.25);
  position: relative;
  z-index: 5;
}
ol {
  text-align: center;
}
ol li {
  display: inline;
  padding-right: 1em;
}
ol li a {
  color: #fff;
}
/* End Notas Adhesivas */

.card-body {
  background-color: #ddd;
  overflow-x: scroll;
}
</style>
