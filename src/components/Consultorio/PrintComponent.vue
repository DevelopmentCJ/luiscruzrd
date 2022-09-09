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
          <span class="bold">Consultorio No.: </span
          >{{ formatSecuence(consultorio.no) }}
        </p>
        <p class="field">
          <span class="bold">Referido Por: </span>{{ consultorio.referidoPor }}
        </p>
        <p class="field">
          <span class="bold">Fecha / Hora: </span
          >{{ formatDate(consultorio.fechaActual) }}
        </p>
        <!-- End Fields -->
      </div>
      <label class="form-label"><b>Datos del Paciente</b></label>
      <div class="grid-2">
        <!-- Start Fields -->
        <p class="field">
          <span class="bold">Nombre y Apellido: </span>{{ consultorio.nombre }}
        </p>
        <p class="field">
          <span class="bold">Fecha de Nacimiento: </span
          >{{ formatDate2(consultorio.fechaNacimiento) }}
        </p>
        <p class="field">
          <span class="bold">Edad: </span>{{ consultorio.edad }} Años
        </p>
        <p class="field">
          <span class="bold">Sexo: </span>{{ consultorio.sexo }}
        </p>
        <p class="field">
          <span class="bold">Cédula: </span>{{ consultorio.cedula }}
        </p>
        <p class="field">
          <span class="bold">Teléfono: </span>{{ consultorio.telefono }}
        </p>
        <p class="field">
          <span class="bold">Dirección: </span>{{ consultorio.direccion }}
        </p>
        <p class="field">
          <span class="bold">Seguro: </span>{{ consultorio.seguro }}
        </p>
        <p class="field">
          <span class="bold">Oficio: </span>{{ consultorio.oficio }}
        </p>
        <p class="field">
          <span class="bold">Deporte: </span>{{ consultorio.deporte }}
        </p>
        <p class="field">
          <span class="bold">Lado Dominante: </span
          >{{ consultorio.ladoDominante }}
        </p>
      </div>
      <label class="form-label"><b>APP y Hábitos Tóxicos</b></label>
      <div class="grid-2">
        <p class="field"><span class="bold">APP: </span>{{ consultorio.app }}</p>
        <p class="field">
          <span class="bold">Hábitos Tóxicos: </span
          >{{ consultorio.habitosToxicos }}
        </p>
        <p class="field">
          <span class="bold">Antecedentes Quirúrgicos: </span
          >{{ consultorio.antQuirurgicos }}
        </p>
        <p class="field">
          <span class="bold">Alergias : </span>{{ consultorio.alergias }}
        </p>
      </div>
      <label class="form-label"><b>Exámen Físico</b></label>
      <div class="grid-2">
        <p class="field">
          <span class="bold">Mecanismo de la Lesión: </span
          >{{ consultorio.mecanismoLesion }}
        </p>
        <p class="field">
          <span class="bold">Tiempo de Evolución: </span
          >{{ consultorio.tiempoEvolucion }}
        </p>
        <p class="field">
          <span class="bold">Elevación Anterior (Activa): </span
          >{{ consultorio.elevacionAnteriorActiva }}
        </p>
        <p class="field">
          <span class="bold">Elevación Anterior (Pasiva): </span
          >{{ consultorio.elevacionAnteriosPasiva }}
        </p>
        <p class="field">
          <span class="bold">Rotación Interna: </span
          >{{ consultorio.rotacionInterna }}
        </p>
        <p class="field">
          <span class="bold">Rotación Externa: </span
          >{{ consultorio.rotacionExterna }}
        </p>
        <p class="field"><span class="bold">ABD: </span>{{ consultorio.abd }}</p>
        <p class="field">
          <span class="bold">JOBE: </span>{{ consultorio.jobe }}
        </p>
        <p class="field">
          <span class="bold">SPEED: </span>{{ consultorio.speed }}
        </p>
        <p class="field">
          <span class="bold">OBRIEN: </span>{{ consultorio.obrien }}
        </p>
        <p class="field">
          <span class="bold">NAPONEON: </span>{{ consultorio.naponeon }}
        </p>
        <p class="field">
          <span class="bold">Acromio Clavicular: </span
          >{{ consultorio.acromioClavicular }}
        </p>
        <p class="field">
          <span class="bold">Inestabilidad Anterior: </span
          >{{ consultorio.inestabilidadAnterior }}
        </p>
        <p class="field">
          <span class="bold">Inestabilidad Posterior: </span
          >{{ consultorio.inestabilidadPosterior }}
        </p>
        <p class="field">
          <span class="bold">Cajón Anterior: </span
          >{{ consultorio.cajonAnterior }}
        </p>
        <p class="field">
          <span class="bold">Cajón Posterior: </span
          >{{ consultorio.cajonPosterior }}
        </p>
        <p class="field">
          <span class="bold">LACHMAN: </span>{{ consultorio.lachman }}
        </p>
        <p class="field">
          <span class="bold">APPLEY: </span>{{ consultorio.appley }}
        </p>
        <p class="field">
          <span class="bold">Bostezo Lateral: </span
          >{{ consultorio.bostezoLateral }}
        </p>
        <p class="field">
          <span class="bold">Bostezo Medial: </span
          >{{ consultorio.bostezoMedial }}
        </p>
        <p class="field">
          <span class="bold">Otra Lesión: </span>{{ consultorio.otraLesion }}
        </p>
      </div>
      <label class="form-label"><b>Estudios Solicitados</b></label>
      <div class="grid-2">
        <p class="field">
          <span class="bold">Estudios Solicitados: </span
          >{{ consultorio.estudiosSolicitados }}
        </p>
      </div>
      <label class="form-label"><b>Diagnósticos</b></label>
      <div class="grid-2">
        <p class="field">
          <span class="bold">Diagnóstico Presuntivo: </span
          >{{ consultorio.diagnosticoPresuntivo }}
        </p>
        <p class="field">
          <span class="bold">Diagnóstico Por Imagen: </span
          >{{ consultorio.diagnosticoImagen }}
        </p>
      </div>
      <label class="form-label"><b>Tratamiento Efectuado</b></label>
      <div class="grid-2">
        <p class="field">
          <span class="bold">Medicamentos: </span>{{ consultorio.medicamentos }}
        </p>
        <p class="field">
          <span class="bold">Terapia Física: </span
          >{{ consultorio.terapiaFisica }}
        </p>
        <p class="field">
          <span class="bold">Cirugía: </span>{{ consultorio.cirugia }}
        </p>
      </div>
      <label class="form-label"><b>Consultas</b></label>
      <div class="grid">
        <p
          class="field"
          v-for="(consulta, index) in consultorio.consultas"
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
import { Consultorio } from "@/interfaces/Consultorio";
import {
  deleteConsultorio,
  getConsultorio,
  updateConsultorio,
} from "@/services/luiscruzrd/Consultorio";
import numeral from "numeral";
import moment from "moment";

export default defineComponent({
  name: "consultorio-list",
  data() {
    return {
      cargando: false,
      consultorio: {} as Consultorio,
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

    async loadConsultorio(id: string) {
      this.toggleLoading();
      try {
        const { data } = await getConsultorio(id);
        this.consultorio = data;
      } catch (error) {
        //console.error(error);
      }
      await this.toggleLoading();
      this.toPrint();

      if (this.$store.state.ids.length == 0) {
        this.$router.push(`/consultorios/${this.consultorio._id}`);
      } else {
        this.$router.push(`/consultorioslot/new`);
      }

      // this.$router.push(`/consultorios/${this.consultorio._id}`);
    },
    async handleUpdate() {
      try {
        if (typeof this.$route.params.id === "string") {
          await updateConsultorio(this.$route.params.id, this.consultorio);
          this.$router.push("/consultorios");
        }
      } catch (error) {
        //console.error(error);
      }
    },
    async handleDelete() {
      try {
        if (typeof this.$route.params.id === "string") {
          deleteConsultorio(this.$route.params.id);
          this.$router.push("/consultorios");
        }
      } catch (error) {
        //console.error(error);
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadConsultorio(this.$route.params.id);
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
