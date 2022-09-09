<template>
  <div>
    <div class="form-group">
      <div class="encabezado">
        <h3>Instituto Avanzado de Artroscopía y Artroplastía</h3>
        <h4>
          Dr. Carlos Morales Ángeles | Ortopedia, Traumatología y Artroscopía
        </h4>
        <!-- <h5>Ortopedia, Traumatología y Artroscopía</h5> -->
        <h6>Tel.: (809) 770-9215 ♦ E-Mail: dr.moralesangeles@gmail.com</h6>
      </div>
      <label class="form-label"><b>Datos Generales</b></label>
      <div class="grid">
        <!-- Start Fields -->
        <p class="field">
          <span class="bold">Empleado No.: </span
          >{{ formatSecuence(empleado.no) }}
        </p>
        <p class="field">
          <span class="bold">Referido Por: </span>{{ empleado.referidoPor }}
        </p>
        <p class="field">
          <span class="bold">Fecha / Hora: </span
          >{{ formatDate(empleado.fechaActual) }}
        </p>
        <!-- End Fields -->
      </div>
      <label class="form-label"><b>Datos del Paciente</b></label>
      <div class="grid-2">
        <!-- Start Fields -->
        <p class="field">
          <span class="bold">Nombre y Apellido: </span>{{ empleado.nombre }}
        </p>
        <p class="field">
          <span class="bold">Fecha de Nacimiento: </span
          >{{ formatDate2(empleado.fechaNacimiento) }}
        </p>
        <p class="field">
          <span class="bold">Edad: </span>{{ empleado.edad }} Años
        </p>
        <p class="field">
          <span class="bold">Sexo: </span>{{ empleado.sexo }}
        </p>
        <p class="field">
          <span class="bold">Cédula: </span>{{ empleado.cedula }}
        </p>
        <p class="field">
          <span class="bold">Teléfono: </span>{{ empleado.telefono }}
        </p>
        <p class="field">
          <span class="bold">Dirección: </span>{{ empleado.direccion }}
        </p>
        <p class="field">
          <span class="bold">Seguro: </span>{{ empleado.seguro }}
        </p>
        <p class="field">
          <span class="bold">Oficio: </span>{{ empleado.oficio }}
        </p>
        <p class="field">
          <span class="bold">Deporte: </span>{{ empleado.deporte }}
        </p>
        <p class="field">
          <span class="bold">Lado Dominante: </span
          >{{ empleado.ladoDominante }}
        </p>
      </div>
      <label class="form-label"><b>APP y Hábitos Tóxicos</b></label>
      <div class="grid-2">
        <p class="field"><span class="bold">APP: </span>{{ empleado.app }}</p>
        <p class="field">
          <span class="bold">Hábitos Tóxicos: </span
          >{{ empleado.habitosToxicos }}
        </p>
        <p class="field">
          <span class="bold">Antecedentes Quirúrgicos: </span
          >{{ empleado.antQuirurgicos }}
        </p>
        <p class="field">
          <span class="bold">Alergias : </span>{{ empleado.alergias }}
        </p>
      </div>
      <label class="form-label"><b>Exámen Físico</b></label>
      <div class="grid-2">
        <p class="field">
          <span class="bold">Mecanismo de la Lesión: </span
          >{{ empleado.mecanismoLesion }}
        </p>
        <p class="field">
          <span class="bold">Tiempo de Evolución: </span
          >{{ empleado.tiempoEvolucion }}
        </p>
        <p class="field">
          <span class="bold">Elevación Anterior (Activa): </span
          >{{ empleado.elevacionAnteriorActiva }}
        </p>
        <p class="field">
          <span class="bold">Elevación Anterior (Pasiva): </span
          >{{ empleado.elevacionAnteriosPasiva }}
        </p>
        <p class="field">
          <span class="bold">Rotación Interna: </span
          >{{ empleado.rotacionInterna }}
        </p>
        <p class="field">
          <span class="bold">Rotación Externa: </span
          >{{ empleado.rotacionExterna }}
        </p>
        <p class="field"><span class="bold">ABD: </span>{{ empleado.abd }}</p>
        <p class="field">
          <span class="bold">JOBE: </span>{{ empleado.jobe }}
        </p>
        <p class="field">
          <span class="bold">SPEED: </span>{{ empleado.speed }}
        </p>
        <p class="field">
          <span class="bold">OBRIEN: </span>{{ empleado.obrien }}
        </p>
        <p class="field">
          <span class="bold">NAPONEON: </span>{{ empleado.naponeon }}
        </p>
        <p class="field">
          <span class="bold">Acromio Clavicular: </span
          >{{ empleado.acromioClavicular }}
        </p>
        <p class="field">
          <span class="bold">Inestabilidad Anterior: </span
          >{{ empleado.inestabilidadAnterior }}
        </p>
        <p class="field">
          <span class="bold">Inestabilidad Posterior: </span
          >{{ empleado.inestabilidadPosterior }}
        </p>
        <p class="field">
          <span class="bold">Cajón Anterior: </span
          >{{ empleado.cajonAnterior }}
        </p>
        <p class="field">
          <span class="bold">Cajón Posterior: </span
          >{{ empleado.cajonPosterior }}
        </p>
        <p class="field">
          <span class="bold">LACHMAN: </span>{{ empleado.lachman }}
        </p>
        <p class="field">
          <span class="bold">APPLEY: </span>{{ empleado.appley }}
        </p>
        <p class="field">
          <span class="bold">Bostezo Lateral: </span
          >{{ empleado.bostezoLateral }}
        </p>
        <p class="field">
          <span class="bold">Bostezo Medial: </span
          >{{ empleado.bostezoMedial }}
        </p>
        <p class="field">
          <span class="bold">Otra Lesión: </span>{{ empleado.otraLesion }}
        </p>
      </div>
      <label class="form-label"><b>Estudios Solicitados</b></label>
      <div class="grid-2">
        <p class="field">
          <span class="bold">Estudios Solicitados: </span
          >{{ empleado.estudiosSolicitados }}
        </p>
      </div>
      <label class="form-label"><b>Diagnósticos</b></label>
      <div class="grid-2">
        <p class="field">
          <span class="bold">Diagnóstico Presuntivo: </span
          >{{ empleado.diagnosticoPresuntivo }}
        </p>
        <p class="field">
          <span class="bold">Diagnóstico Por Imagen: </span
          >{{ empleado.diagnosticoImagen }}
        </p>
      </div>
      <label class="form-label"><b>Tratamiento Efectuado</b></label>
      <div class="grid-2">
        <p class="field">
          <span class="bold">Medicamentos: </span>{{ empleado.medicamentos }}
        </p>
        <p class="field">
          <span class="bold">Terapia Física: </span
          >{{ empleado.terapiaFisica }}
        </p>
        <p class="field">
          <span class="bold">Cirugía: </span>{{ empleado.cirugia }}
        </p>
      </div>
      <label class="form-label"><b>Consultas</b></label>
      <div class="grid">
        <p
          class="field"
          v-for="(consulta, index) in empleado.consultas"
          :key="index"
        >
          No. {{ index + 1 }} - {{ formatDate(consulta.date) }}<br />
          {{ consulta.description }}
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />

      <!-- <label class="form-label"><b>Consultas</b></label> -->
      <div class="grid-2">
        <p class="field">
          _______________________________________
        </p>
        <br />
        <p class="field bold">
          Dr. Carlos Morales Ángeles
        </p>
        <br />
        <p class="field bold">
          Exq. 473-10
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Empleado } from "@/interfaces/Empleado";
import {
  deleteEmpleado,
  getEmpleado,
  updateEmpleado,
} from "@/services/luiscruzrd/Empleado";
import numeral from "numeral";
import moment from "moment";

export default defineComponent({
  name: "empleado-list",
  data() {
    return {
      cargando: false,
      empleado: {} as Empleado,
    };
  },
  methods: {
    toPrint() {
      window.print();
    },
    toggleLoading() {
      this.cargando = !this.cargando;
    },
    formatSecuence(value: number) {
      return numeral(value).format("00000000");
    },
    formatNumber(value: number) {
      return numeral(value).format("0,0.00");
    },

    formatNumber2(value: number) {
      return numeral(value).format("00000000");
    },

    formatDate(dateValue: Date) {
      let out = moment(dateValue).add(0, "h");
      return moment(out).format("D/MM/yyyy HH:mm");
    },

    formatDate2(dateValue: Date) {
      let out = moment(dateValue).add(0, "h");
      return moment(out).format("D/MM/yyyy");
    },

    async loadEmpleado(id: string) {
      this.toggleLoading();
      try {
        const { data } = await getEmpleado(id);
        this.empleado = data;
      } catch (error) {
        //console.error(error);
      }
      await this.toggleLoading();
      this.toPrint();

      if (this.$store.state.ids.length == 0) {
        this.$router.push(`/empleados/${this.empleado._id}`);
      } else {
        this.$router.push(`/empleadoslot/new`);
      }

      // this.$router.push(`/empleados/${this.empleado._id}`);
    },
    async handleUpdate() {
      try {
        if (typeof this.$route.params.id === "string") {
          await updateEmpleado(this.$route.params.id, this.empleado);
          this.$router.push("/empleados");
        }
      } catch (error) {
        //console.error(error);
      }
    },
    async handleDelete() {
      try {
        if (typeof this.$route.params.id === "string") {
          deleteEmpleado(this.$route.params.id);
          this.$router.push("/empleados");
        }
      } catch (error) {
        //console.error(error);
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadEmpleado(this.$route.params.id);
    }
  },

  // beforeUnmount() {
  //   this.toPrint();
  // }
});
</script>

<style lang="css" scoped>
.encabezado {
  background-color: rgb(0, 0, 0);
  margin-bottom: 7px;
}

h3,
h4,
h5,
h6 {
  text-align: center;
  color: white;
  margin: 0;
  font-size: 95%;
}
.field {
  font-size: 85%;
}
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
  max-width: 750px;
  margin: 0px auto;
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

/* h5 {
  font-size: 90%;
  color: rgb(147, 147, 147);
  font-weight: bold;
  text-align: center;
} */

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
  color: rgb(0, 0, 0);
  border-radius: 7px;
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

p {
  font-size: 130%;
  margin: 0;
}

.bold {
  font-weight: bold;
}
</style>
