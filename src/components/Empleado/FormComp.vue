<template v-show="!cargando">
  <!-- {{ this.currentEdition }} -->
  <!-- {{ this.seguros2.length }} -->
  <div>
    <div>
      <Navbar />
      <!-- {{ formatDate(this.empleado.ultimoPago) }}<br /> -->
      <!-- {{ formatDate(this.fechaActual) }}<br /> -->
      <!-- {{
        formatDate(this.fechaActual) -
          formatDate(this.empleado.ultimoPago) -
          1
      }}<br />
      {{
        (formatDate(this.fechaActual) -
          formatDate(this.empleado.ultimoPago)) *
          this.empleado.monto
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
          <header>Supervisores</header>
          <div class="contenido7">
            <label @click="this.showModalMethod72()" for="btn-modal">X</label>
            <div class="contenido7">
              <div>
                <input
                  id="search"
                  type="search"
                  v-model="search"
                  class="form-control"
                  @keypress="buscar()"
                />
              </div>
              <div>
                <p
                  class="ars"
                  style="cursor: pointer"
                  v-for="(seguro, index) in seguros2"
                  :key="index"
                  @click="setSeguro(seguro.nomb, seguro.apell)"
                >
                  {{ seguro.nomb }} {{ seguro.apell }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="!cargando" class="general">
        <h6 :class="isError(error)">{{ error }}</h6>
        <form>
          <fieldset>
            <h6>{{ encabezado }}</h6>
            <label class="form-label"><b>Datos Generales</b></label>
            <div class="grid">
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="cod"
                  >Código:</label
                ><input
                  id="cod"
                  type="String"
                  v-model="empleado.cod"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="nomb"
                  >Nombre:</label
                ><input
                  id="nomb"
                  type="String"
                  v-model="empleado.nomb"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="apell"
                  >Apellido:</label
                ><input
                  id="apell"
                  type="String"
                  v-model="empleado.apell"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="sex"
                  >Sexo:</label
                ><select
                  id="sex"
                  type="String"
                  v-model="empleado.sex"
                  class="form-select"
                >
                  <option>M</option>
                  <option>F</option>
                </select>
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="fechaNac"
                  >Fecha de Nacimiento:</label
                ><input
                  id="fechaNac"
                  type="Date"
                  @change="calcularEdad(empleado.fechaNac)"
                  v-model="empleado.fechaNac"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="edad"
                  >Edad:</label
                ><input
                  disabled
                  id="edad"
                  type="Number"
                  v-model="empleado.edad"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="nacio"
                  >Nacionalidad:</label
                ><input
                  id="nacio"
                  type="String"
                  v-model="empleado.nacio"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="cedu"
                  >Cédula:</label
                ><input
                  id="cedu"
                  type="String"
                  v-model="empleado.cedu"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="pass"
                  >Pasaporte:</label
                ><input
                  id="pass"
                  type="String"
                  v-model="empleado.pass"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="telef"
                  >Teléfono:</label
                ><input
                  id="telef"
                  type="String"
                  v-model="empleado.telef"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="direccion"
                  >Dirección:</label
                ><input
                  id="direccion"
                  type="String"
                  v-model="empleado.direccion"
                  class="form-control"
                />
              </div>
            </div>
            <label class="form-label"><b>Datos de Empleado</b></label>
            <div class="grid">
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="emp"
                  >Empresa:</label
                ><input
                  id="emp"
                  type="String"
                  v-model="empleado.emp"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="suc"
                  >Sucursal:</label
                ><input
                  id="suc"
                  type="String"
                  v-model="empleado.suc"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="dpto"
                  >Departamento:</label
                ><input
                  id="dpto"
                  type="String"
                  v-model="empleado.dpto"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="puest"
                  >Puesto:</label
                ><input
                  id="puest"
                  type="String"
                  v-model="empleado.puest"
                  class="form-control"
                />
              </div>
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="turn"
                  >Turno:</label
                ><input
                  id="turn"
                  type="String"
                  v-model="empleado.turn"
                  class="form-control"
                />
              </div>

              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="ars"
                  >Aseguradora:</label
                ><input
                  id="ars"
                  type="String"
                  v-model="empleado.ars"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="iniVac"
                  >Inicio de Vacaciones:</label
                ><input
                  id="iniVac"
                  type="Date"
                  v-model="empleado.iniVac"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="finVac"
                  >Fin de Vacaciones:</label
                ><input
                  id="finVac"
                  type="Date"
                  v-model="empleado.finVac"
                  class="form-control"
                />
              </div>

              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="noDepe"
                  >Número de Dependientes:</label
                ><input
                  id="noDepe"
                  type="Number"
                  v-model="empleado.noDepe"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="fechaCont"
                  >Fecha de Contratación:</label
                ><input
                  id="fechaCont"
                  type="Date"
                  v-model="empleado.fechaCont"
                  class="form-control"
                />
              </div>
              <!-- <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="supervisor"
                  >Supervisor:</label
                ><input
                  id="supervisor"
                  type="String"
                  @focus="this.showModalMethod7()"
                  v-model="empleado.supervisor"
                  class="form-control"
                />
              </div> -->
              <div>
                <label class="ta-l col-form-label col-form-label-sm" for="stat"
                  >Estatus:</label
                ><input
                  id="stat"
                  type="String"
                  v-model="empleado.stat"
                  class="form-control"
                />
              </div>
            </div>
            <label class="form-label"><b>Datos Financieros</b></label>
            <div class="grid">
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="cuenta"
                  >Cuenta Bancaria:</label
                ><input
                  id="cuenta"
                  type="String"
                  v-model="empleado.cuenta"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="salario"
                  >Salario:</label
                ><input
                  id="salario"
                  type="Number"
                  v-model="empleado.salario"
                  class="form-control"
                />
              </div>
              <div>
                <label
                  class="ta-l col-form-label col-form-label-sm"
                  for="otrsIngs"
                  >Otros Ingresos:</label
                ><input
                  id="otrsIngs"
                  type="String"
                  v-model="empleado.otrsIngs"
                  class="form-control"
                />
              </div>
            </div>
            <label class="form-label"><b>Notas</b></label>
            <div class="grid">
              <div>
                <!-- <label class="ta-l col-form-label col-form-label-sm" for="notas"
                  >Notas:</label> -->
                <textarea
                  rows="5"
                  id="notas"
                  type="String"
                  v-model="empleado.notas"
                  class="form-control"
                />
              </div>
            </div>

            <div class="grid-consultas">
              <!-- <ul>
                <li
                  v-for="(consulta, index) in empleado.consultas"
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
                v-for="(consulta, index) in empleado.consultas"
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
                  v-for="(consulta, index) in empleado.consultas"
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
              @click.prevent="saveEmpleado()"
              :disabled="
                !empleado.nomb ||
                  !empleado.apell ||
                  !empleado.finVac ||
                  !empleado.iniVac ||
                  !empleado.fechaNac ||
                  !empleado.fechaCont
              "
            >
              <i class="fas fa-save"></i> Guardar
            </button>

            <button
              v-if="this.modoForm == 'show'"
              class="btn btn-success"
              @click.prevent="handleUpdate()"
              :disabled="
                !empleado.nomb ||
                  !empleado.apell ||
                  !empleado.finVac ||
                  !empleado.iniVac ||
                  !empleado.fechaNac ||
                  !empleado.fechaCont
              "
            >
              <i class="fas fa-save"></i> Actualizar
            </button>

            <!-- <button
              v-if="this.modoForm == 'show'"
              class="btn btn-warning"
              @click="this.$router.push(`/empleados2/${empleado._id}`)"
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
import { Empleado } from "@/interfaces/Empleado";
// import { Funcion } from "@/interfaces/Funcion";
// import { Vitola } from "@/interfaces/Vitola";
// import { Empleado } from "@/interfaces/Empleado";
// import {
//   getPeg,
//   getMez,
//   getEmp,
// } from "@/services/luiscruzrd/Empleado";
// import { getLigas } from "@/services/luiscruzrd/Liga";
import {
  createEmpleado,
  eliminateEmpleados,
  createEmpleadoa,
  getOneEmpleado,
  deleteEmpleado,
  getEmpleado,
  updateEmpleado,
} from "@/services/luiscruzrd/Empleado";
// import { getVitolas } from "@/services/luiscruzrd/Vitola";
// import { getFuncions } from "@/services/luiscruzrd/Funcion";
import { createMensaje } from "@/services/luiscruzrd/ChatService";
import { getEmpleados } from "@/services/luiscruzrd/Empleado";
import numeral from "numeral";
import moment from "moment";
// import Pusher from "pusher-js";

export default defineComponent({
  name: "empleados-form",
  components: {
    Navbar,
  },
  data() {
    return {
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
      // empleados: [] as Empleado[],
      // empleadosEmp: [] as Empleado[],
      // empleadosPeg: [] as Empleado[],
      // empleadosMez: [] as Empleado[],
      campoFocus: "cod",
      mensageError: "Error",
      mensageExito: "Empleado Registrado Exitosamente",
      mensageConfirm: "¿Está Seguro que desea Eliminar Este Empleado?",
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
      empleado: {} as Empleado,
      oneEmpleado: {} as Empleado,
      one: {},
      nextNo: Number,
      empleadoSelected: [],
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
    this.loadEmpleados();
    this.seguros = [
      "Victor Osiris Alcántara Castro",
      "Abel David Ventura Rivas",
    ];
    if (this.$route.fullPath == "/empleados/new") {
      this.modoForm = "add";
      this.encabezado = "Nuevo Empleado";
    } else {
      this.modoForm = "show";
      this.encabezado = "Detalles de Empleado";
    }

    if (this.modoForm == "add") {
      this.empleado.no = 1;
      this.empleado.consultas = [];
      this.fillFields();
      this.fixTime();
    } else {
      this.showDeleteMethod();
      if (typeof this.$route.params.id === "string") {
        await this.loadEmpleado(this.$route.params.id);
        if (this.empleado.iniVac == null) {
          this.empleado.iniVac = new Date();
        }
        if (this.empleado.finVac == null) {
          this.empleado.finVac = new Date();
        }
        if (this.empleado.fechaNac == null) {
          this.empleado.fechaNac = new Date();
        }
        if (this.empleado.fechaCont == null) {
          this.empleado.fechaCont = new Date();
        }

        // this.empleado.finVac = new Date();
        // this.empleado.fechaNac = new Date();
        // this.empleado.fechaCont = new Date();
      }
      this.fixTime();
    }

    this.focus();
    // this.loadEmpleados();
    // this.loadLigas();
    // this.loadVitolas();
    // this.filterEmpleados();
  },

  methods: {
    setSeguro(seguro: string, seguro2: string) {
      this.empleado.supervisor = seguro + " " + seguro2;
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
        this.empleado.consultas.splice(it, 1);
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
        this.empleado.consultas.push({
          description: this.currentConsulta,
          date: new Date(),
        });
        this.currentConsulta = "";
      }
      document.getElementById("currentConsulta").focus();
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
      this.empleado.edad = years;
    },

    // async filterEmpleados() {
    //   this.toggleLoading();
    //   try {
    //     const res = await getPeg();
    //     this.empleadosPeg = res.data;
    //   } catch (error) {
    //     // console.error(error);
    //   }

    //   try {
    //     const res = await getEmp();
    //     this.empleadosEmp = res.data;
    //   } catch (error) {
    //     // console.error(error);
    //   }

    //   try {
    //     const res = await getMez();
    //     this.empleadosMez = res.data;
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

    async loadEmpleados() {
      this.toggleLoading();
      try {
        const res = await getEmpleados();
        this.seguros = res.data;
      } catch (error) {
        // console.error(error);
      }
      this.toggleLoading();
    },

    fixTime() {
      this.empleado.finVac = this.formatDateToFix(this.empleado.finVac, false);
      this.empleado.iniVac = this.formatDateToFix(this.empleado.iniVac, false);
      this.empleado.fechaNac = this.formatDateToFix(
        this.empleado.fechaNac,
        false
      );
      this.empleado.fechaCont = this.formatDateToFix(
        this.empleado.fechaCont,
        false
      );
    },

    formatDateToFix(dateValue: Date, incTime: boolean) {
      if (incTime == true) {
        let out = moment(dateValue).add(0, "days");
        return moment(out).format("yyyy-MM-DDTHH:mm");
      } else {
        let out = moment(dateValue).add(4, "hours");
        return moment(out).format("yyyy-MM-DD");
      }
    },

    async loadEmpleado(id: string) {
      this.toggleLoading();
      try {
        const { data } = await getEmpleado(id);
        this.empleado = data;
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
          this.empleado.userMod = this.$store.state.user.usuario;
          await updateEmpleado(this.$route.params.id, this.empleado);
          this.addMessage();
          this.$router.push("/empleados");
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
            await deleteEmpleado(this.$route.params.id);
            this.addMessage();
            this.$router.push("/empleados");
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
    calcEmpleado() {
      (this.empleado.retension = this.empleado.bruto * 0.1),
        (this.empleado.neto = this.empleado.bruto * 0.9);
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
      // this.empleado.finVac = new Date();
      // this.empleado.fechaNac = new Date();
      // this.empleado.fechaCont = new Date();
    },

    async loadOneEmpleado() {
      try {
        const res = await getOneEmpleado();
        this.oneEmpleado = res.data;
        this.one = this.oneEmpleado[0];
        if (typeof this.one.no === "number") {
          this.nextNo = this.one.no + 1;
        } else {
          this.one.no = 0;
          this.nextNo = this.one.no + 1;
        }
        if (this.nextNo == null) {
          this.nextNo = 0;
        }
        this.empleado.no = this.nextNo;
        this.empleado.principal = this.nextNo;
        this.empleado.principal = this.nextNo;
      } catch (error) {
        // console.error(error);
      }
    },

    async saveEmpleadoa() {
      await this.loadOneEmpleado();
      try {
        const res = await createEmpleadoa(this.empleado);
        // // console.log(res);
      } catch (error) {
        // // console.error(error);
      }
    },

    async saveEmpleado() {
      this.toggleLoading();
      try {
        try {
          const res = await getOneEmpleado();
          this.oneEmpleado = res.data;
          this.one = this.oneEmpleado[0];
          this.nextNo = this.one.no + 1;
          this.empleado.no = this.nextNo;
        } catch (error) {
          // // console.error(error);
        }
        this.empleado.userReg = this.$store.state.user.usuario;
        const res = await createEmpleado(this.empleado).then(
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
        // this.$router.push("/empleados/");
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

    async deleteAllEmpleados() {
      try {
        const res = await eliminateEmpleados(this.empleado);
        // // console.log(res);
      } catch (error) {
        // // console.error(error);
      }
    },

    cleanFields() {
      this.empleado.nomb = "";
      this.empleado.nacio = "";
      this.empleado.apell = "";
      this.empleado.telef = "";
      this.empleado.pass = "";
      this.empleado.cedu = "";
      this.empleado.sex = "";
      this.empleado.stat = "";
      this.empleado.emp = "";
      this.empleado.puest = "";
      this.empleado.ars = "";
      this.empleado.suc = "";
      this.empleado.otrsIngs = "";
      this.empleado.finVac = "";
      this.empleado.iniVac = "";
      this.empleado.noDepe = "";
      this.empleado.turn = "";
      this.empleado.cod = "";
      this.empleado.dpto = "";
      this.empleado.fechaNac = "";
      this.empleado.fechaCont = "";
      this.empleado.salario = "";
      this.empleado.cuenta = "";
      this.empleado.edad = "";
      this.empleado.acciones = [];
      this.empleado.notas = "";
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
  /* cursor: pointer; */
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
