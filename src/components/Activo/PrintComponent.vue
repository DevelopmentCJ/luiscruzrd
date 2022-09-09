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
          <span class="bold">Activo No.: </span
          >{{ formatSecuence(activo.no) }}
        </p>
        <p class="field">
          <span class="bold">Referido Por: </span>{{ activo.referidoPor }}
        </p>
        <p class="field">
          <span class="bold">Fecha / Hora: </span
          >{{ formatDate(activo.fechaActual) }}
        </p>
        <!-- End Fields -->
      </div>
      <label class="form-label"><b>Datos del Paciente</b></label>
      <div class="grid-2">
        <!-- Start Fields -->
        <p class="field">
          <span class="bold">Nombre y Apellido: </span>{{ activo.nombre }}
        </p>
        <p class="field">
          <span class="bold">Fecha de Nacimiento: </span
          >{{ formatDate2(activo.fechaNacimiento) }}
        </p>
        <p class="field">
          <span class="bold">Edad: </span>{{ activo.edad }} Años
        </p>
        <p class="field">
          <span class="bold">Sexo: </span>{{ activo.sexo }}
        </p>
        <p class="field">
          <span class="bold">Cédula: </span>{{ activo.cedula }}
        </p>
        <p class="field">
          <span class="bold">Teléfono: </span>{{ activo.telefono }}
        </p>
        <p class="field">
          <span class="bold">Dirección: </span>{{ activo.direccion }}
        </p>
        <p class="field">
          <span class="bold">Seguro: </span>{{ activo.seguro }}
        </p>
        <p class="field">
          <span class="bold">Oficio: </span>{{ activo.oficio }}
        </p>
        <p class="field">
          <span class="bold">Deporte: </span>{{ activo.deporte }}
        </p>
        <p class="field">
          <span class="bold">Lado Dominante: </span
          >{{ activo.ladoDominante }}
        </p>
      </div>
      <label class="form-label"><b>APP y Hábitos Tóxicos</b></label>
      <div class="grid-2">
        <p class="field"><span class="bold">APP: </span>{{ activo.app }}</p>
        <p class="field">
          <span class="bold">Hábitos Tóxicos: </span
          >{{ activo.habitosToxicos }}
        </p>
        <p class="field">
          <span class="bold">Antecedentes Quirúrgicos: </span
          >{{ activo.antQuirurgicos }}
        </p>
        <p class="field">
          <span class="bold">Alergias : </span>{{ activo.alergias }}
        </p>
      </div>
      <label class="form-label"><b>Exámen Físico</b></label>
      <div class="grid-2">
        <p class="field">
          <span class="bold">Mecanismo de la Lesión: </span
          >{{ activo.mecanismoLesion }}
        </p>
        <p class="field">
          <span class="bold">Tiempo de Evolución: </span
          >{{ activo.tiempoEvolucion }}
        </p>
        <p class="field">
          <span class="bold">Elevación Anterior (Activa): </span
          >{{ activo.elevacionAnteriorActiva }}
        </p>
        <p class="field">
          <span class="bold">Elevación Anterior (Pasiva): </span
          >{{ activo.elevacionAnteriosPasiva }}
        </p>
        <p class="field">
          <span class="bold">Rotación Interna: </span
          >{{ activo.rotacionInterna }}
        </p>
        <p class="field">
          <span class="bold">Rotación Externa: </span
          >{{ activo.rotacionExterna }}
        </p>
        <p class="field"><span class="bold">ABD: </span>{{ activo.abd }}</p>
        <p class="field">
          <span class="bold">JOBE: </span>{{ activo.jobe }}
        </p>
        <p class="field">
          <span class="bold">SPEED: </span>{{ activo.speed }}
        </p>
        <p class="field">
          <span class="bold">OBRIEN: </span>{{ activo.obrien }}
        </p>
        <p class="field">
          <span class="bold">NAPONEON: </span>{{ activo.naponeon }}
        </p>
        <p class="field">
          <span class="bold">Acromio Clavicular: </span
          >{{ activo.acromioClavicular }}
        </p>
        <p class="field">
          <span class="bold">Inestabilidad Anterior: </span
          >{{ activo.inestabilidadAnterior }}
        </p>
        <p class="field">
          <span class="bold">Inestabilidad Posterior: </span
          >{{ activo.inestabilidadPosterior }}
        </p>
        <p class="field">
          <span class="bold">Cajón Anterior: </span
          >{{ activo.cajonAnterior }}
        </p>
        <p class="field">
          <span class="bold">Cajón Posterior: </span
          >{{ activo.cajonPosterior }}
        </p>
        <p class="field">
          <span class="bold">LACHMAN: </span>{{ activo.lachman }}
        </p>
        <p class="field">
          <span class="bold">APPLEY: </span>{{ activo.appley }}
        </p>
        <p class="field">
          <span class="bold">Bostezo Lateral: </span
          >{{ activo.bostezoLateral }}
        </p>
        <p class="field">
          <span class="bold">Bostezo Medial: </span
          >{{ activo.bostezoMedial }}
        </p>
        <p class="field">
          <span class="bold">Otra Lesión: </span>{{ activo.otraLesion }}
        </p>
      </div>
      <label class="form-label"><b>Estudios Solicitados</b></label>
      <div class="grid-2">
        <p class="field">
          <span class="bold">Estudios Solicitados: </span
          >{{ activo.estudiosSolicitados }}
        </p>
      </div>
      <label class="form-label"><b>Diagnósticos</b></label>
      <div class="grid-2">
        <p class="field">
          <span class="bold">Diagnóstico Presuntivo: </span
          >{{ activo.diagnosticoPresuntivo }}
        </p>
        <p class="field">
          <span class="bold">Diagnóstico Por Imagen: </span
          >{{ activo.diagnosticoImagen }}
        </p>
      </div>
      <label class="form-label"><b>Tratamiento Efectuado</b></label>
      <div class="grid-2">
        <p class="field">
          <span class="bold">Medicamentos: </span>{{ activo.medicamentos }}
        </p>
        <p class="field">
          <span class="bold">Terapia Física: </span
          >{{ activo.terapiaFisica }}
        </p>
        <p class="field">
          <span class="bold">Cirugía: </span>{{ activo.cirugia }}
        </p>
      </div>
      <label class="form-label"><b>Consultas</b></label>
      <div class="grid">
        <p
          class="field"
          v-for="(consulta, index) in activo.consultas"
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
import { Activo } from "@/interfaces/Activo";
import {
  deleteActivo,
  getActivo,
  updateActivo,
} from "@/services/luiscruzrd/Activo";
import numeral from "numeral";
import moment from "moment";

export default defineComponent({
  name: "activo-list",
  data() {
    return {
      cargando: false,
      activo: {} as Activo,
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

    async loadActivo(id: string) {
      this.toggleLoading();
      try {
        const { data } = await getActivo(id);
        this.activo = data;
      } catch (error) {
        //console.error(error);
      }
      await this.toggleLoading();
      this.toPrint();

      if (this.$store.state.ids.length == 0) {
        this.$router.push(`/activos/${this.activo._id}`);
      } else {
        this.$router.push(`/activoslot/new`);
      }

      // this.$router.push(`/activos/${this.activo._id}`);
    },
    async handleUpdate() {
      try {
        if (typeof this.$route.params.id === "string") {
          await updateActivo(this.$route.params.id, this.activo);
          this.$router.push("/activos");
        }
      } catch (error) {
        //console.error(error);
      }
    },
    async handleDelete() {
      try {
        if (typeof this.$route.params.id === "string") {
          deleteActivo(this.$route.params.id);
          this.$router.push("/activos");
        }
      } catch (error) {
        //console.error(error);
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadActivo(this.$route.params.id);
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
