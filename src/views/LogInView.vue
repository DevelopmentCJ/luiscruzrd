<template>
  <!-- Navbar (sit on top) -->
  <div class="w3-top">
    <div class="w3-bar w3-white w3-card" id="myNavbar">
      <a href="#home" class="w3-bar-item w3-button w3-wide">LUIS CRUZ</a>
      <!-- Right-sided navbar links -->
      <div class="w3-right w3-hide-small">
        <a href="#about" class="w3-bar-item w3-button">ACERCA</a>
        <a href="#team" class="w3-bar-item w3-button"
          ><i class="fa fa-users"></i> COLABORADORES</a
        >
        <a href="#work" class="w3-bar-item w3-button"
          ><i class="fa fa-th"></i> LABOR</a
        >
        <a href="#pricing" class="w3-bar-item w3-button"
          ><i class="fas fa-hands-helping"></i> UNETE</a
        >
        <a href="#Contactar" class="w3-bar-item w3-button"
          ><i class="fa fa-envelope"></i> CONTACTO</a
        >
        <a href="#SoyMiembro" class="w3-bar-item w3-button"
          ><i class="fas fa-sign-in-alt"></i> REGISTRARME</a
        >
        <a href="#SoyMiembro2" class="w3-bar-item w3-button"
          ><i class="fas fa-sign-in-alt"></i> INICIAR SESION</a
        >
      </div>
      <!-- Hide right-floated links on small screens and replace them with a menu icon -->

      <a
        href="javascript:void(0)"
        class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
        @click="w3_open()"
      >
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </div>
  <!-- Sidebar on small screens when clicking the menu icon -->
  <nav
    class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
    style="display:none"
    id="mySidebar"
  >
    <a
      href="javascript:void(0)"
      @click="w3_close()"
      class="w3-bar-item w3-button w3-large w3-padding-16"
      >Cerrar ×</a
    >
    <a href="#about" @click="w3_close()" class="w3-bar-item w3-button"
      >ACERCA</a
    >
    <a href="#team" @click="w3_close()" class="w3-bar-item w3-button"
      >COLABORADORES</a
    >
    <a href="#work" @click="w3_close()" class="w3-bar-item w3-button">LABOR</a>
    <a href="#pricing" @click="w3_close()" class="w3-bar-item w3-button"
      >UNETE</a
    >
    <a href="#Contactar" @click="w3_close()" class="w3-bar-item w3-button"
      >CONTACTO</a
    >
    <a href="#SoyMiembro" @click="w3_close()" class="w3-bar-item w3-button"
      >REGISTRARME</a
    >
    <a href="#SoyMiembro2" @click="w3_close()" class="w3-bar-item w3-button"
      >INICIAR SESION</a
    >
  </nav>
  <div class="general">
    <div class="template">
      <!-- Header with full-height image -->
      <header class="bgimg-1 w3-display-container w3-grayscale-min" id="home">
        <div class="w3-display-left w3-text-white" style="padding:48px">
          <span class="w3-jumbo w3-hide-small">Ayudarte es nuestra pasión</span
          ><br />
          <span class="w3-xxlarge w3-hide-large w3-hide-medium"
            >Ayudarte es nuestra pasión</span
          ><br />
          <span class="w3-large"
            >Nos importas, llevamos calidad de vida donde te encuentres.</span
          >
          <p>
            <a
              href="#about"
              class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"
              >Conoce más y se parte hoy</a
            >
          </p>
        </div>
        <div
          class="w3-display-bottomleft w3-text-grey w3-large"
          style="padding:24px 48px"
        >
          <i class="fa fa-facebook-official w3-hover-opacity"></i>
          <i class="fa fa-instagram w3-hover-opacity"></i>
          <i class="fa fa-snapchat w3-hover-opacity"></i>
          <i class="fa fa-pinterest-p w3-hover-opacity"></i>
          <i class="fa fa-twitter w3-hover-opacity"></i>
          <i class="fa fa-linkedin w3-hover-opacity"></i>
        </div>
      </header>

      <!-- About Section -->
      <div class="w3-container" style="padding:128px 16px" id="about">
        <h3 class="w3-center">ACERCA DE LA ORGANIZACION</h3>
        <p class="w3-center w3-large">Lo que destaca nuestra obra</p>
        <div class="w3-row-padding w3-center" style="margin-top:64px">
          <div class="w3-quarter">
            <i class="fas fa-handshake w3-margin-bottom w3-jumbo w3-center"></i>
            <p class="w3-large">Empatía</p>
            <p>
              Nos sentimos identificados con tus necesidades básicas y de salud,
              llevamos calidad de vida a ti y a los tuyos.
            </p>
          </div>
          <div class="w3-quarter">
            <i class="fa fa-heart w3-margin-bottom w3-jumbo"></i>
            <p class="w3-large">Compromiso</p>
            <p>
              Ponemos todo nuestro empeño para cumplir con la misión que nos
              hemos propuesto de ayudar a las comunidades.
            </p>
          </div>
          <div class="w3-quarter">
            <i class="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
            <p class="w3-large">Honestidad</p>
            <p>
              Procuramos servir de manera honesta, mejorando la calidad de vida
              y aportando al bienestar de la comunidad.
            </p>
          </div>
          <div class="w3-quarter">
            <i
              class="fas fa-hand-holding-medical w3-margin-bottom w3-jumbo"
            ></i>
            <p class="w3-large">Solidaridad</p>
            <p>
              Buscamos generar un ecosistema de bienestar para todos los
              ciudadanos de las comunidades mas vulnerables del país.
            </p>
          </div>
        </div>
      </div>

      <!-- Promo Section - "We know design" -->
      <div class="w3-container w3-light-grey" style="padding:128px 16px">
        <div class="w3-row-padding">
          <div class="w3-col m6">
            <h3>Conocemos tus necesidades</h3>
            <p>
              Por más de 40 años nuestro equipo ha estado ayudando a las
              comunidades más vulnerables de Cristo Rey, Distrito Nacional y
              toda la República Dominicana.
            </p>
            <p>
              Hemos recorrido cada rincón del país respondiendo a los llamados
              de personas enfermas y comunidades en riesgo a las cuales se le
              imposibilita acceder a una Salud de calidad o simplemente a las
              necesidades básicas como un colchón donde descansar, un techo
              donde reguardarse o simplemente alimento para poder sobrevivir
              junto a sus hijos y familiares.
            </p>
            <p>
              Estas cosas las hemos provisto con mucho esfuerzo, dedicación,
              amor y empatía hacia nuestras comunidades, uniéndonos a su clamor
              y aportando el granito de arena necesario para mejorar su calidad
              de vida.
            </p>
            <p>
              No nos cansaremos de hacer el bien y es nuestro ruego a Dios que
              nos permita seguir sirviendo a nuestras comunidades por muchos
              años. Estamos comprometidos con esto.
            </p>
            <p>
              <a href="#work" class="w3-button w3-black"
                ><i class="fa fa-th"> </i> Mira nuestra labor</a
              >
            </p>
          </div>
          <div class="w3-col m6">
            <img
              class="w3-image w3-round-large"
              src="@/assets/images/mac0.jpg"
              alt="Buildings"
              width="700"
              height="394"
            />
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="w3-container" style="padding:128px 16px" id="team">
        <h3 class="w3-center">COLABORADORES</h3>
        <p class="w3-center w3-large">Ellos hacen posible nuestra misión</p>
        <div class="w3-row-padding " style="margin-top:64px">
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card">
              <img
                src="@/assets/images/team2.jpg"
                alt="John"
                style="width:100%"
              />
              <div class="w3-container">
                <h3>Invis</h3>
                <p class="w3-opacity">Salud Visual</p>
                <p>
                  Institución líder en el país, brinda atención especializada de
                  calidad y personalizada.
                </p>
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://invisrd.com/"
                  >
                    <button class="w3-button w3-light-grey w3-block">
                      <i class="fa fa-envelope"></i> Contactar
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card">
              <img
                src="@/assets/images/team1.jpg"
                alt="Jane"
                style="width:100%"
              />
              <div class="w3-container">
                <h3>Fundación Cruz Jiminián</h3>
                <p class="w3-opacity">Ayudas en Salud</p>
                <p>
                  Fundación modelo, satisface las necesidades de salud de los
                  más necesitados.
                </p>
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://web.facebook.com/fundacioncruzjiminianrd/?_rdc=1&_rdr"
                  >
                    <button class="w3-button w3-light-grey w3-block">
                      <i class="fa fa-envelope"></i> Contactar
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card">
              <img
                src="@/assets/images/team3.jpg"
                alt="Mike"
                style="width:100%"
              />
              <div class="w3-container">
                <h3>Clínica Cruz Jiminián</h3>
                <p class="w3-opacity">Centro Médico Avanzado</p>
                <p>
                  Institución que brinda servicios con alto nivel de calidad y
                  con gran calor humano.
                </p>
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://www.clinicacruzjiminian.com/"
                  >
                    <button class="w3-button w3-light-grey w3-block">
                      <i class="fa fa-envelope"></i> Contactar
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card">
              <img
                src="@/assets/images/team4.jpg"
                alt="Dan"
                style="width:100%"
              />
              <div class="w3-container">
                <h3>UNISAF</h3>
                <p class="w3-opacity">Unidad de Atención Primaria</p>
                <p>
                  Institución comprometida con seguir de cerca la salud de los
                  más vulnerables.
                </p>
                <p>
                  <button class="w3-button w3-light-grey w3-block">
                    <i class="fa fa-envelope"></i> Contactar
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Promo Section "Statistics" -->
      <div class="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
        <div class="w3-quarter">
          <span class="w3-xxlarge">14+</span>
          <br />Planes de ayuda
        </div>
        <div class="w3-quarter">
          <span class="w3-xxlarge">55+</span>
          <br />Comunidades atendidas
        </div>
        <div class="w3-quarter">
          <span class="w3-xxlarge">89+</span>
          <br />Casos abordados
        </div>
        <div class="w3-quarter">
          <span class="w3-xxlarge">150+</span>
          <br />Voluntarios
        </div>
      </div>

      <!-- Work Section -->
      <div class="w3-container" style="padding:128px 16px" id="work">
        <h3 class="w3-center">NUESTRA LABOR</h3>
        <p class="w3-center w3-large">Lo que hemos hecho por las personas</p>

        <div class="w3-row-padding" style="margin-top:64px">
          <div class="w3-col l3 m6">
            <img
              src="@/assets/images/tech_mic.jpg"
              style="width:100%"
              onclick="onClick(this)"
              class="w3-hover-opacity"
              alt="Recorrido con la junta de vecinos"
            />
          </div>
          <div class="w3-col l3 m6">
            <img
              src="@/assets/images/tech_phone.jpg"
              style="width:100%"
              onclick="onClick(this)"
              class="w3-hover-opacity"
              alt="Visita a la Nueva Barquita"
            />
          </div>
          <div class="w3-col l3 m6">
            <img
              src="@/assets/images/tech_drone.jpg"
              style="width:100%"
              onclick="onClick(this)"
              class="w3-hover-opacity"
              alt="Entrega de Insumos Médicos"
            />
          </div>
          <div class="w3-col l3 m6">
            <img
              src="@/assets/images/tech_sound.jpg"
              style="width:100%"
              onclick="onClick(this)"
              class="w3-hover-opacity"
              alt="Charla de Prevención en Salud"
            />
          </div>
        </div>

        <div class="w3-row-padding w3-section">
          <div class="w3-col l3 m6">
            <img
              src="@/assets/images/tech_tablet.jpg"
              style="width:100%"
              onclick="onClick(this)"
              class="w3-hover-opacity"
              alt="Restauración de Salud Visual"
            />
          </div>
          <div class="w3-col l3 m6">
            <img
              src="@/assets/images/tech_camera.jpg"
              style="width:100%"
              onclick="onClick(this)"
              class="w3-hover-opacity"
              alt="Envío de Donaciones al Interior"
            />
          </div>
          <div class="w3-col l3 m6">
            <img
              src="@/assets/images/tech_typewriter.jpg"
              style="width:100%"
              onclick="onClick(this)"
              class="w3-hover-opacity"
              alt="Construcción de Vivienda"
            />
          </div>
          <div class="w3-col l3 m6">
            <img
              src="@/assets/images/tech_tableturner.jpg"
              style="width:100%"
              onclick="onClick(this)"
              class="w3-hover-opacity"
              alt="Operativo de Consulta Médica General"
            />
          </div>
        </div>
      </div>

      <!-- Modal for full size images on click-->
      <div
        id="modal01"
        class="w3-modal w3-black"
        onclick="this.style.display='none'"
      >
        <span
          class="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright"
          title="Close Modal Image"
          >×</span
        >
        <div
          class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64"
        >
          <img id="img01" class="w3-image" />
          <p id="caption" class="w3-opacity w3-large"></p>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="w3-container w3-light-grey w3-padding-64">
        <div class="w3-row-padding">
          <div class="w3-col m6">
            <h3>Nuestro Impacto</h3>
            <p>
              Somos un movimiento social orientado al bienestar integral de las
              comunidades de la República Dominicana. Comprometidos con el
              mejoramiento de la calidad de vida del pais.
            </p>
            <p>
              Nuestra visión es llevar bienestar a todas las comunidades de la
              República Dominicana.<br />Enfocándonos en aportes que impacten la
              salud, cultura, deportes, educación y medio ambiente.
            </p>
          </div>
          <div class="w3-col m6">
            <p class="w3-wide">
              <i class="fas fa-medkit w3-margin-right"></i>Salud
            </p>
            <div class="w3-grey">
              <div
                class="w3-container w3-dark-grey w3-center"
                style="width:100%"
              >
                100%
              </div>
            </div>
            <p class="w3-wide">
              <i class="fas fa-volleyball-ball w3-margin-right"></i>Cultura
            </p>
            <div class="w3-grey">
              <div
                class="w3-container w3-dark-grey w3-center"
                style="width:65%"
              >
                65%
              </div>
            </div>
            <p class="w3-wide">
              <i class="fas fa-globe-americas w3-margin-right"></i>Medio
              ambiente
            </p>
            <div class="w3-grey">
              <div
                class="w3-container w3-dark-grey w3-center"
                style="width:35%"
              >
                35%
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pricing Section -->
      <div
        class="w3-container w3-center w3-dark-grey"
        style="padding:128px 16px"
        id="pricing"
      >
        <h3>ÚNETE</h3>
        <p class="w3-large">Elige la manera en que te uniras a nosotros</p>
        <div class="w3-row-padding" style="margin-top:64px">
          <div class="w3-third w3-section">
            <ul class="w3-ul w3-white w3-hover-shadow">
              <li class="w3-black w3-xlarge w3-padding-32">Comunitario</li>
              <li class="w3-padding-16">
                <b>Ayúdanos</b> a llegar a tu Comunidad
              </li>
              <li class="w3-padding-16"><b>Identifica</b> las Necesidades</li>
              <li class="w3-padding-16"><b>Canaliza</b> Soluciones y Ayudas</li>
              <li class="w3-padding-16"><b>Transforma</b> tu Entorno</li>
              <!-- <li class="w3-padding-16">
                <h2 class="w3-wide">$ 10</h2>
                <span class="w3-opacity">per month</span>
              </li> -->
              <li class="w3-light-grey w3-padding-24">
                <button class="w3-button w3-black w3-padding-large">
                  <a href="#SoyMiembro" class="w3-bar-item w3-button"
                    ><i class="fas fa-sign-in-alt"></i> Unirme</a
                  >
                </button>
              </li>
            </ul>
          </div>
          <div class="w3-third">
            <ul class="w3-ul w3-white w3-hover-shadow">
              <li class="w3-red w3-xlarge w3-padding-48">Voluntario</li>
              <li class="w3-padding-16"><b>Colabora</b> Con nosotros</li>
              <li class="w3-padding-16"><b>Visita</b> las Comunidades</li>
              <li class="w3-padding-16"><b>Comparte</b> Nuestra Labor</li>
              <li class="w3-padding-16"><b>Contribuye</b> al Medioambiente</li>
              <!-- <li class="w3-padding-16">
                <h2 class="w3-wide">$ 25</h2>
                <span class="w3-opacity">per month</span>
              </li> -->
              <li class="w3-light-grey w3-padding-24">
                <button class="w3-button w3-black w3-padding-large">
                  <a href="#SoyMiembro" class="w3-bar-item w3-button"
                    ><i class="fas fa-sign-in-alt"></i> Unirme</a
                  >
                </button>
              </li>
            </ul>
          </div>
          <div class="w3-third w3-section">
            <ul class="w3-ul w3-white w3-hover-shadow">
              <li class="w3-black w3-xlarge w3-padding-32">Contribuidor</li>
              <li class="w3-padding-16"><b>Provee</b> Recursos Financieros</li>
              <li class="w3-padding-16"><b>Dona</b> Bienes y otros Recursos</li>
              <li class="w3-padding-16">
                <b>Contribuye</b> con Cualquier Medio
              </li>
              <li class="w3-padding-16"><b>Ayúdanos</b> a Llegar más Lejos</li>
              <!-- <li class="w3-padding-16">
                <h2 class="w3-wide">$ 50</h2>
                <span class="w3-opacity">per month</span>
              </li> -->
              <li class="w3-light-grey w3-padding-24">
                <button class="w3-button w3-black w3-padding-large">
                  <a href="#SoyMiembro" class="w3-bar-item w3-button"
                    ><i class="fas fa-sign-in-alt"></i> Unirme</a
                  >
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Contactar Section -->
      <div
        class="w3-container w3-light-grey"
        style="padding:128px 16px"
        id="Contactar"
      >
        <h3 class="w3-center">Contactar</h3>
        <p class="w3-center w3-large">
          Estémos en contacto. Envíanos un Mensaje:
        </p>
        <div style="margin-top:48px">
          <div class="grid">
            <p>
              <i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>
              Santo Domingo, Rep. Dom.
            </p>
            <p>
              <i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i>
              Teléfono: (809) 707-1543
            </p>
            <p>
              <i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i>
              Email: info@luiscruzrd.com
            </p>
            <p>Regístrate para Enviarnos un Mensaje<br /></p>
            <a href="#SoyMiembro" class="w3-bar-item w3-button"
              ><button class="w3-button w3-black w3-padding-large">
                <i class="fa fa-paper-plane"></i> ENVIAR MENSAJE
              </button></a
            >
          </div>
          <br />
          <!-- <form>
            <p>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Nombre"
                required
                name="Name"
              />
            </p>
            <p>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Correo Electrónico"
                required
                name="Email"
              />
            </p>
            <p>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Asunto"
                required
                name="Subject"
              />
            </p>
            <p>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Mensaje"
                required
                name="Message"
              />
            </p>
            <p>
              <button class="w3-button w3-black" type="submit">
                <i class="fa fa-paper-plane"></i> ENVIAR MENSAJE
              </button>
            </p>
          </form> -->
          <!-- Image of location/map -->
          <img
            src="@/assets/images/map.jpg"
            class="w3-image w3-greyscale"
            style="width:100%;margin-top:48px"
          />
        </div>
      </div>
      <!-- Soy Miembro Section -->
      <div class="grid">
        <div
          class="w3-container w3-light-grey"
          style="padding:128px 16px"
          id="SoyMiembro"
        >
          <h3 class="w3-center">Crear Cuenta</h3>
          <p class="w3-center w3-large">
            Por favor, ingrese sus datos:
          </p>
          <h6 class="error">{{ error2 }}</h6>
          <div style="margin-top:48px">
            <br />
            <form>
              <p>
                <b>
                  Datos Personales:
                </b>
              </p>
              <div class="grid2">
                <p>
                  <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Cédula"
                    name="cedula"
                    id="cedula"
                    v-model="usuario.cedula"
                  />
                </p>
                <p>
                  <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    id="nombre"
                    v-model="usuario.nombre"
                  />
                </p>
                <p>
                  <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    id="apellido"
                    v-model="usuario.apellido"
                  />
                </p>
                <p>
                  <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Teléfono"
                    name="telefono"
                    id="telefono"
                    v-model="usuario.telefono"
                  />
                </p>
                <p>
                  <label for="provincia">Provincia:</label>
                  <select
                    id="provincia"
                    name="provincia"
                    placeholder="Provincia"
                    type="text"
                    v-model="usuario.provincia"
                    class="w3-input w3-border"
                  >
                    <option>Azua</option>
                    <option>Bahoruco</option>
                    <option>Barahona</option>
                    <option>Dajabón</option>
                    <option>Distrito Nacional</option>
                    <option>Duarte</option>
                    <option>El Seibo</option>
                    <option>Elías Piña</option>
                    <option>Espaillat</option>
                    <option>Hato Mayor</option>
                    <option>Hermanas Mirabal</option>
                    <option>Independencia</option>
                    <option>La Altagracia</option>
                    <option>La Romana</option>
                    <option>La Vega</option>
                    <option>María Trinidad Sánchez</option>
                    <option>Monseñor Nouel</option>
                    <option>Monte Cristi</option>
                    <option>Monte Plata</option>
                    <option>Pedernales</option>
                    <option>Peravia</option>
                    <option>Puerto Plata</option>
                    <option>Samaná</option>
                    <option>San Cristóbal</option>
                    <option>San José de Ocoa</option>
                    <option>San Juan</option>
                    <option>San Pedro de Macorís</option>
                    <option>Sánchez Ramírez</option>
                    <option>Santiago</option>
                    <option>Santiago Rodríguez</option>
                    <option>Santo Domingo</option>
                    <option>Valverde</option>
                  </select>
                  <!-- <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Provincia"
                    name="provincia"
                    id="provincia"
                    v-model="usuario.provincia"
                  /> -->
                </p>
                <p>
                  <label for="provincia">Quiero:</label>
                  <select
                    id="quiero"
                    name="quiero"
                    placeholder="Quiero"
                    type="text"
                    v-model="usuario.quiero"
                    class="w3-input w3-border"
                    @change="defRole(usuario.quiero)"
                  >
                    <option>Ser Comunitario</option>
                    <option>Ser Voluntario</option>
                    <option>Ser Contribuidor</option>
                    <option>Solicitar Ayuda</option>
                    <option>Conocer Más</option>
                  </select>
                  <!-- <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Provincia"
                    name="provincia"
                    id="provincia"
                    v-model="usuario.provincia"
                  /> -->
                </p>
                <!-- <p>
                  <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Sector"
                    name="sector"
                    id="sector"
                    v-model="usuario.sector"
                  />
                </p> -->
              </div>
              <p>
                <b>
                  Datos de Usuario:
                </b>
              </p>
              <div class="grid2">
                <p>
                  <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Correo Electrónico"
                    name="Email"
                    id="email"
                    v-model="usuario.email"
                  />
                </p>
                <p>
                  <input
                    class="w3-input w3-border"
                    type="password"
                    placeholder="Contraseña"
                    name="Subject"
                    id="password"
                    v-model="usuario.password"
                  />
                </p>
                <p>
                  <input
                    class="w3-input w3-border"
                    type="password"
                    placeholder="Confirmar Contraseña"
                    name="Subject"
                    id="passwordConfirm"
                    v-model="usuario.passwordConfirm"
                  />
                </p>
              </div>
              <p>
                <button
                  class="w3-button w3-black"
                  @click.prevent="signup()"
                  :disabled="
                    !usuario.cedula ||
                      !usuario.nombre ||
                      !usuario.apellido ||
                      !usuario.telefono ||
                      !usuario.provincia ||
                      !usuario.quiero ||
                      !usuario.email ||
                      !usuario.password ||
                      !usuario.passwordConfirm
                  "
                >
                  <i class="fas fa-sign-in-alt"></i> CREAR CUENTA
                </button>
              </p>
              <!-- <h6>¿No tienes cuenta?</h6> -->
              <!-- <h6>
                <router-link
                  class="nav-link"
                  style="text-decoration: none"
                  to="/signup"
                  >REGISTRARME</router-link
                >
              </h6> -->
            </form>
            <!-- Image of location/map -->
            <!-- <img
            src="@/assets/images/map.jpg"
            class="w3-image w3-greyscale"
            style="width:100%;margin-top:48px"
          /> -->
          </div>
        </div>
        <div class="w3-container" style="padding:128px 16px" id="SoyMiembro2">
          <h3 class="w3-center">Iniciar Sesión</h3>
          <p class="w3-center w3-large">
            Por favor, ingrese sus credenciales:
          </p>
          <h6 class="error">{{ error }}</h6>
          <div style="margin-top:48px">
            <br />
            <form>
              <p>
                <input
                  class="w3-input w3-border"
                  type="text"
                  placeholder="Correo Electrónico"
                  name="Email"
                  id="email"
                  v-model="usuario.email"
                />
              </p>
              <p>
                <input
                  class="w3-input w3-border"
                  type="password"
                  placeholder="Contraseña"
                  name="Subject"
                  id="password"
                  v-model="usuario.password"
                />
              </p>
              <p>
                <button
                  class="w3-button w3-black"
                  @click.prevent="login()"
                  :disabled="!usuario.email || !usuario.password"
                >
                  <i class="fas fa-sign-in-alt"></i> INICIAR SESION
                </button>
              </p>
              <!-- <h6>¿No tienes cuenta?</h6> -->
              <!-- <h6>
                <router-link
                  class="nav-link"
                  style="text-decoration: none"
                  to="/signup"
                  >REGISTRARME</router-link
                >
              </h6> -->
            </form>
            <!-- Image of location/map -->
            <!-- <img
            src="@/assets/images/map.jpg"
            class="w3-image w3-greyscale"
            style="width:100%;margin-top:48px"
          /> -->
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="w3-center w3-black w3-padding-64">
        <a href="#home" class="w3-button w3-light-grey"
          ><i class="fa fa-arrow-up w3-margin-right"></i>Al Inicio</a
        >
        <div class="w3-xlarge w3-section">
          <i class="fa fa-facebook-official w3-hover-opacity"></i>
          <i class="fa fa-instagram w3-hover-opacity"></i>
          <i class="fa fa-snapchat w3-hover-opacity"></i>
          <i class="fa fa-pinterest-p w3-hover-opacity"></i>
          <i class="fa fa-twitter w3-hover-opacity"></i>
          <i class="fa fa-linkedin w3-hover-opacity"></i>
        </div>
        <!-- <p>
          Powered by
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            title="W3.CSS"
            target="_blank"
            class="w3-hover-text-green"
            >w3.css</a
          >
        </p> -->
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import {
  loginUsuario,
  registerUsuario,
} from "@/services/luiscruzrd/UsuarioService";
import { Usuario } from "@/interfaces/Usuario";
export default {
  name: "LoginView",
  components: {},

  data() {
    return {
      cargando: false,
      error: "",
      error2: "",
      usuario: {} as Usuario,
    };
  },

  methods: {
    w3_close() {
      var mySidebar = document.getElementById("mySidebar");
      mySidebar.style.display = "none";
    },
    w3_open() {
      var mySidebar = document.getElementById("mySidebar");
      if (mySidebar.style.display === "block") {
        mySidebar.style.display = "none";
      } else {
        mySidebar.style.display = "block";
      }
    },
    defRole(quiero: string) {
      switch (quiero) {
        case "Ser Comunitario":
          this.usuario.role = "Administrador";
          break;
        case "Ser Voluntario":
          this.usuario.role = "Administrador";
          break;
        case "Ser Contribuidor":
          this.usuario.role = "Administrador";
          break;
        case "Solicitar Ayuda":
          this.usuario.role = "Administrador";
          break;
        case "Conocer Más":
          this.usuario.role = "Administrador";
          break;
      }
    },
    async signup() {
      // this.usuario.role = "Administrador";
      if (this.usuario.password == this.usuario.passwordConfirm) {
        if (this.usuario.password.length >= 8) {
          this.toggleLoading();
          this.arreglar();
          const resp = await registerUsuario(this.usuario).then(
            (res) => {
              this.error2 = "";
              // this.$router.push("/");
              this.resp = resp;
              this.respuesta = res;
            },
            (err) => {
              // console.log(err.response);
              this.error2 = err.response.data.error;
            }
          );
          this.toggleLoading();
          this.usuario.cedula = "";
          this.usuario.email = "";
          this.usuario.nombre = "";
          this.usuario.apellido = "";
          this.usuario.provincia = "";
          this.usuario.quiero = "";
          this.usuario.telefono = "";
          this.usuario.password = "";
          this.usuario.passwordConfirm = "";
        } else {
          alert("Ingrese una Contraseña más segura");
        }
      } else {
        alert("La Contraseña no Coincide");
      }
    },

    arreglar() {
      this.usuario.email = this.usuario.email.toLowerCase().trim();
    },

    toggleLoading() {
      this.cargando = !this.cargando;
    },

    // login() {
    //   this.$store.dispatch("loginAction");
    //   this.$store.state.user.type = this.role;
    //   this.$store.state.user.usuario = this.usuario;
    //   this.$router.push("/dashboard");
    // },

    async login() {
      this.toggleLoading();
      // let user = {
      //   email: this.email,
      //   password: this.password,
      // };
      this.arreglar();
      await loginUsuario(this.usuario).then(
        // axios.post("http://localhost:5000/login", user).then(
        (res) => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            //Authenticated True
            this.$store.dispatch("loginAction");
            this.$store.state.user.type = res.data.usuario.role;
            // alert(res.data.usuario.role)
            this.$store.state.user.usuario = res.data.usuario.nombre;
            this.$store.state.user.defaultStatus =
              res.data.usuario.defaultStatus;
            this.$store.state.user.aseguradoras = res.data.usuario.aseguradoras;
            this.$router.push("/dashboard");
          }
        },
        (err) => {
          // console.log(err.response);
          this.error = err.response.data.error;
        }
      );
      this.toggleLoading();
    },
  },
};
</script>
<style>
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
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}

.grid2 {
  display: grid;
  grid-auto-flow: dense;
  grid-template-rows: auto auto;
  gap: 3px;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
}

.error {
  color: white;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: rgb(255, 85, 85);
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

:root {
  scroll-behavior: smooth;
}

body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}

body,
html {
  height: 100%;
  line-height: 1.8;
}

/* Full height image header */
.bgimg-1 {
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: url(../assets/images/mac.jpg);
  min-height: 100%;
}

.w3-bar .w3-button {
  padding: 16px;
}
</style>
