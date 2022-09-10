<template v-show="!cargando">
  <div>
    <!-- {{this.$store.state.user.aseguradoras}} -->
    <Navbar />
    <!-- {{ this.totales }} -->
    <Transition>
      <div v-if="cargando" class="spin">
        <img class="img" src="@/assets/images/logo.png" />
      </div>
    </Transition>
    <div v-show="!cargando" class="general">
      <form>
        <!---------------------------------------- Start Dashboard por Usuario ---------------------------------------->
        <fieldset>
          <!-- <h4>
          <i class="fas fa-file-spreadsheet" _mstvisible="2"></i> Dashboard
        </h4> -->
          <div class="form-group">
            <div class="grid">
              <!------------------------------------------ Campo ------------------------------------------>
              <div
                v-show="!cargando"
                v-if="this.$store.state.user.type == 'Power User'"
                class="card bg-secondary"
                style="max-width: 20rem;"
              >
                <div class="card-header">
                  <p>Cantidad de Mejoras por Estatus</p>
                </div>
                <div class="card-body">
                  <p
                    v-for="(tipoMejora, index) in mejorasPend"
                    :key="index"
                    class="card-text"
                  >
                    {{ tipoMejora._id.estatus }} : {{ tipoMejora.count }}
                  </p>
                </div>
              </div>

              <!------------------------------------------ ***** ------------------------------------------>
              <!------------------------------------------ Campo ------------------------------------------>
              <div
                v-show="!cargando"
                v-if="this.$store.state.user.type == 'Power User'"
                class="card bg-secondary"
                style="max-width: 20rem;"
              >
                <div class="card-header">
                  <p>Cantidad de Usuarios por Rol</p>
                </div>
                <div class="card-body">
                  <p
                    v-for="(item, index) in usuariosCant"
                    :key="index"
                    class="card-text"
                  >
                    {{ item._id.role }} : {{ item.count }}
                  </p>
                </div>
              </div>
              <!------------------------------------------ ***** ------------------------------------------>
              <!------------------------------------------ Campo ------------------------------------------>
              <!-- <div
                v-show="!cargando"
                v-if="
                  this.$store.state.user.type == 'Power User' ||
                    this.$store.state.user.type == 'Encargado'
                "
                class="myCard"
              >
                <p class="bold">Facturación a Fundación por Período</p>
                <div>
                  <table id="customers">
                    <tr>
                      <th>Período</th>
                      <th>Servicios</th>
                      <th>Facturado</th>
                      <th>Disponible</th>
                    </tr>
                    <tr v-for="(item, index) in periodos" :key="index">
                      <td>{{ getMonth(item._id.month) }}</td>
                      <td class="der">{{ formatNumber(item.count, false) }}</td>
                      <td class="der">
                        {{ formatNumber(item.cobertura, true) }}
                      </td>
                      <td
                        :class="formatTable(this.presupuesto - item.cobertura)"
                      >
                        {{
                          formatNumber(this.presupuesto - item.cobertura, true)
                        }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div> -->
              <!------------------------------------------ ***** ------------------------------------------>
              <!------------------------------------------ Campo ------------------------------------------>
              <!-- <div
                v-show="!cargando"
                v-if="
                  this.$store.state.user.type == 'Power User' ||
                    this.$store.state.user.type == 'Encargado'
                "
                class="myCard"
              >
                <p class="bold">Facturación a Senasa Subsidiado por Período</p>
                <div>
                  <table id="customers">
                    <tr>
                      <th>Período</th>
                      <th>Servicios</th>
                      <th>Facturado</th>
                      <th>Disponible</th>
                    </tr>
                    <tr v-for="(item, index) in periodos2" :key="index">
                      <td>{{ getMonth(item._id.month) }}</td>
                      <td class="der">{{ formatNumber(item.count, false) }}</td>
                      <td class="der">
                        {{ formatNumber(item.cobertura, true) }}
                      </td>
                      <td
                        :class="formatTable(this.presupuesto2 - item.cobertura)"
                      >
                        {{
                          formatNumber(this.presupuesto2 - item.cobertura, true)
                        }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div> -->
              <!------------------------------------------ ***** ------------------------------------------>
              <!------------------------------------------ Campo ------------------------------------------>
              <!-- <div
                v-show="!cargando"
                v-if="
                  this.$store.state.user.type == 'Power User' ||
                    this.$store.state.user.type == 'Administrador'
                "
                class="myCard"
              >
                <p class="bold">Registro de Productos por Día</p>
                <div>
                  <table id="customers">
                    <tr>
                      <th>Día</th>
                      <th>Productos</th>
                    </tr>
                    <tr v-for="(item, index) in dias" :key="index">
                      <td>{{ item._id.day }}</td>
                      <td class="der">{{ formatNumber(item.count, false) }}</td>
                    </tr>
                    <tr>
                      <td>Total: {{ formatNumber(this.totales.dias) }}</td>
                      <td class="der">
                        {{ formatNumber(this.totales.cantProductos) }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div> -->
              <!------------------------------------------ ***** ------------------------------------------>
            </div>
          </div>
        </fieldset>
        <!---------------------------------------- Finish Dashboard por Usuario ---------------------------------------->
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import { getMejPend } from "@/services/luiscruzrd/MejoraService";
import { getUsuariosCant } from "@/services/luiscruzrd/UsuarioService";
import { getproddayli } from "@/services/luiscruzrd/Producto";
import {
  getfacturasCant,
  getfactsGpedByCli,
} from "@/services/luiscruzrd/FacturaService";
import {
  getfundbyper,
  getsubsibyper,
} from "@/services/datasamicj/FacturaService";
import numeral from "numeral";
import Pusher from "pusher-js";
export default {
  name: "DashboardView",
  components: {
    Navbar,
  },

  data() {
    return {
      dias: [] as any,
      presupuesto: 400000,
      presupuesto2: 2335000,
      usuariosCant: [] as any,
      facturasCant: [] as any,
      factsGpedByCli: [] as any,
      mejorasPend: [] as any,
      totales: {} as any,
      cargando: false,
    };
  },

  methods: {
    formatTable(dif: number) {
      if (dif < 0) {
        return "der red";
      } else {
        return "der green";
      }
    },

    getMonth(month: number) {
      switch (month) {
        case 1:
          return "Enero";
        case 2:
          return "Febrero";
        case 3:
          return "Marzo";
        case 4:
          return "Abril";
        case 5:
          return "Mayo";
        case 6:
          return "Junio";
        case 7:
          return "Julio";
        case 8:
          return "Agosto";
        case 9:
          return "Septiembre";
        case 10:
          return "Octubre";
        case 11:
          return "Noviembre";
        case 12:
          return "Diciembre";

        default:
          return "Error";
      }
    },
    getARS(id_ars: string) {
      switch (id_ars) {
        case "5":
          return "ARS CMD";
        case "14":
          return "MAPFRE SALUD ARS, S.A.";
        case "8":
          return "FUTURO";
        case "12":
          return "META SALUD";
        case "23":
          return "YUNEN";
        case "17":
          return "RESERVAS";
        case "13":
          return "MONUMENTAL";
        case "4":
          return "ASEMAP";
        case "1":
          return "ARS APS S A";
        case "21":
          return "SIMAG";
        case "16":
          return "RENACER";
        case "59":
          return "GRUPO MEDICO ASOCIADO";
        case "9":
          return "GRUPO MEDICO ASOCIADO";
        case "24":
          return "PRIMERA  ARS DE HUMANO";
        case "22":
          return "UNIVERSAL";
        case "29":
          return "ALBA GAS S.R.L.";
        case "10":
          return "HUMANO SEGUROS";
        case "20":
          return "SENASA CONTRIBUTIVO";
        case "61":
          return "SENASA SUBSIDIADO";
        case "18":
          return "SEMMA";
        case "65":
          return "IDOPPRIL";
        default:
          return "ARS Descripcion";
      }
    },

    toColor(type: string) {
      if (type == "1 - Recibido por Auditoría Interna") {
        return "valor1";
      } else if (type == "2 - Verificado por Auditoría Interna") {
        return "valor2";
      } else if (type == "3 - Verificado por Auditoría Externa") {
        return "valor3";
      } else if (type == "4 - Recibido por Reclamaciones Médicas") {
        return "valor4";
      } else if (type == "5 - Verificado por Reclamaciones Médicas") {
        return "valor5";
      } else if (type == "6 - Cargado a Lote") {
        return "valor6";
      } else if (type == "7 - Enviado a la Aseguradora") {
        return "valor7";
      } else if (type == "Todos") {
        return "Todos";
      }
    },

    valorTotal() {
      this.totales.dias = this.dias.length;
      this.totales.cantProductos = this.dias.reduce(
        (accum: any, item: any) => accum + item.count,
        0
      );

      // this.totales.count = this.periodos.reduce(
      //   (accum: any, item: any) => accum + item.count,
      //   0
      // );
      // this.totales.cobertura = this.periodos.reduce(
      //   (accum: any, item: any) => accum + item.cobertura,
      //   0
      // );
      // this.totales.facturas = this.facturasCant.reduce(
      //   (accum: any, item: any) => accum + item.count,
      //   0
      // );
      // this.totales.facturas2 = this.factsGpedByCli.reduce(
      //   (accum: any, item: any) => accum + item.count,
      //   0
      // );
      // this.totales.cobertura2 = this.factsGpedByCli.reduce(
      //   (accum: any, item: any) => accum + item.cobertura,
      //   0
      // );
      // this.totales.cantClientes = this.factsGpedByCli.length;
    },

    pusherSubscribe() {
      // Start pusher subscribe
      var pusher = new Pusher("abb975a801390f0852f4", {
        cluster: "us2",
      });

      var channel = pusher.subscribe("my-channel");
      channel.bind("my-event", (data: any) => {
        this.loadfacturasCant2();
        this.loadfactsGpedByCli2();
        // this.player.src = this.song.src;
        // this.player.play();
      });
      // End pusher subscribe
    },

    toggleLoading() {
      this.cargando = !this.cargando;
    },

    formatNumber(value: number, decimal: boolean) {
      if (decimal == true) {
        return numeral(value).format("0,0.00");
      } else {
        return numeral(value).format("0,0");
      }
    },

    formatNumberPcto(value: number, decimal: boolean) {
      if (decimal == true) {
        return numeral(value).format("0,0.00");
      } else {
        return numeral(value).format("0,0.00");
      }
    },

    async loadMejorasPendientes() {
      // this.toggleLoading();
      try {
        const res = await getMejPend();
        this.mejorasPend = res.data;
      } catch (error) {
        // console.error(error);
      }
      // this.toggleLoading();
    },

    async loadUsuariosCant() {
      // this.toggleLoading();
      try {
        const res = await getUsuariosCant();
        this.usuariosCant = res.data;
      } catch (error) {
        // console.error(error);
      }
      // this.toggleLoading();
    },

    async loadfacturasCant() {
      this.toggleLoading();
      try {
        const res = await getfacturasCant();
        this.facturasCant = res.data;
      } catch (error) {
        // console.error(error);
      }
      this.toggleLoading();
    },

    async loadfundbyper() {
      this.toggleLoading();
      try {
        const res = await getfundbyper();
        this.periodos = res.data;
      } catch (error) {
        // console.error(error);
      }
      this.toggleLoading();
    },

    async loadsubsibyper() {
      this.toggleLoading();
      try {
        const res = await getsubsibyper();
        this.periodos2 = res.data;
      } catch (error) {
        // console.error(error);
      }
      this.toggleLoading();
    },

    async loadproddayli() {
      this.toggleLoading();
      try {
        const res = await getproddayli();
        this.dias = res.data;
      } catch (error) {
        // console.error(error);
      }
      this.toggleLoading();
    },

    async loadfactsGpedByCli() {
      this.toggleLoading();
      try {
        const res = await getfactsGpedByCli();
        this.factsGpedByCli = res.data;
      } catch (error) {
        // console.error(error);
      }
      this.toggleLoading();
    },

    async loadfactsGpedByCli2() {
      try {
        const res = await getfactsGpedByCli();
        this.factsGpedByCli = res.data;
      } catch (error) {
        // console.error(error);
      }
    },

    async loadfacturasCant2() {
      // this.toggleLoading();
      try {
        const res = await getfacturasCant();
        this.facturasCant = res.data;
      } catch (error) {
        // console.error(error);
      }
      // this.toggleLoading();
    },
  },

  mounted() {
    this.loadMejorasPendientes();
    this.loadUsuariosCant();
    // this.loadfundbyper();
    // this.loadsubsibyper();
    this.loadproddayli();
    // this.loadfacturasCant();
    // this.loadfactsGpedByCli();
    // this.pusherSubscribe();
  },

  updated() {
    this.valorTotal();
  },
};
</script>

<style lang="css" scoped>
.bold {
  font-weight: bold;
}
.myCard {
  margin: 10px;
}

.der {
  text-align: right;
}

.red {
  color: red;
}

.green {
  color: green;
}

/* Start Tabla */
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td {
  border: 1px solid #ddd;
  padding: 3px;
  /* cursor: pointer; */
}

#customers th {
  border: 1px solid #ddd;
  padding: 3px;
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
  background-color: rgb(255, 153, 0);
  color: white;
}

td,
th {
  font-size: 75%;
}

/* End Tabla */

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

.valor1 {
  text-align: left;
  /* background-color: rgb(255, 0, 0); */
  margin: 1px;
  font-weight: bold;
  color: rgb(255, 0, 0);
}

.valor2 {
  text-align: left;
  /* background-color: rgb(255, 64, 0); */
  margin: 1px;
  font-weight: bold;
  color: rgb(255, 64, 0);
}

.valor3 {
  text-align: left;
  /* background-color: rgb(255, 128, 0); */
  margin: 1px;
  font-weight: bold;
  color: rgb(255, 128, 0);
}

.valor4 {
  text-align: left;
  /* background-color: rgb(255, 192, 0); */
  margin: 1px;
  font-weight: bold;
  color: rgb(255, 192, 0);
}

.valor5 {
  text-align: left;
  /* background-color: rgb(171, 187, 26); */
  margin: 1px;
  font-weight: bold;
  color: rgb(171, 187, 26);
}

.valor6 {
  text-align: left;
  /* background-color: rgb(86, 182, 53); */
  margin: 1px;
  font-weight: bold;
  color: rgb(86, 182, 53);
}

.valor7 {
  text-align: left;
  /* background-color: rgb(0, 176, 80); */
  margin: 1px;
  font-weight: bold;
  color: rgb(0, 176, 80);
}

.ta-r {
  text-align: right;
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
  background-color: rgb(255, 153, 0);
  color: white;
}

td,
th {
  font-size: 75%;
}

p {
  font-size: 75%;
  margin: 0;
}
/* -------------------------------Structure... -------------------------------*/
h4 {
  text-align: center;
}
* {
  margin: 0;
}

.general {
  width: 100%;
  max-width: 1500px;
  margin: 0px auto;
}

.grid {
  display: grid;
  grid-auto-flow: dense;
  grid-template-rows: auto auto;
  gap: 3px;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
}

.grid-2 {
  display: grid;
  grid-auto-flow: dense;
  grid-template-rows: auto auto;
  gap: 3px;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
}
/* -------------------------------**********-------------------------------*/
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
  width: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* -------------------------------**********-------------------------------*/
</style>
