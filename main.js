document.addEventListener("DOMContentLoaded", () => {
  // --- Contadores para la sección de Impacto ---
  // Iniciamos en cero o con valores de localStorage
  let donaciones = parseInt(localStorage.getItem("contadorDonaciones")) || 0;
  let voluntarios = parseInt(localStorage.getItem("contadorVoluntarios")) || 0;
  let personasAyudadas = 780; // Este valor es de muestra hasta poder obtener datos reales

  // Referencias a los spans del HTML usando clases únicas (¡más limpio!)
  const spanDonaciones = document.querySelector('.contador-donaciones');
  const spanVoluntarios = document.querySelector('.contador-voluntarios');
  const spanPersonas = document.querySelector('.contador-personas');

  // Mostramos los valores cargados
  if (spanDonaciones) spanDonaciones.textContent = donaciones;
  if (spanVoluntarios) spanVoluntarios.textContent = voluntarios;
  if (spanPersonas) spanPersonas.textContent = personasAyudadas;

  // --- Contadores animados ---
  const counters = document.querySelectorAll(".contador");
  let started = false;
  function animateCounters() {
    if (!started && counters.length && isInViewport(counters[0])) {
      counters.forEach(counter => {
        // Detectar cuál contador es
        let target = 0;
        if (counter.classList.contains("contador-donaciones"))   target = donaciones;
        else if (counter.classList.contains("contador-voluntarios")) target = voluntarios;
        else if (counter.classList.contains("contador-personas"))    target = personasAyudadas;
        let count = 0;
        const step = Math.ceil(target / 100) || 1;
        const update = () => {
          count += step;
          if (count < target) {
            counter.textContent = count;
            requestAnimationFrame(update);
          } else {
            counter.textContent = target;
          }
        };
        update();
      });
      started = true;
    }
  }
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }
  window.addEventListener("scroll", animateCounters);

  // --- Formulario de registro ---
  const formRegistro = document.getElementById("formRegistro");
  if (formRegistro) {
    formRegistro.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const provincia = document.getElementById("provincia").value.trim();
      const localidad = document.getElementById("localidad").value.trim();
      const errores = [];

      if (nombre.length < 2) errores.push("Nombre inválido");
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errores.push("Email inválido");
      if (!/^\d{6,15}$/.test(telefono)) errores.push("Teléfono inválido");
      if (provincia.length < 2) errores.push("Provincia requerida");
      if (localidad.length < 2) errores.push("Localidad requerida");

      if (errores.length > 0) {
        alert(errores.join("\n"));
      } else {
        alert("¡Registro exitoso, gracias por sumarte!");
        this.reset();

        // Si el registro es exitoso sumo un voluntario
        voluntarios += 1;
        localStorage.setItem("contadorVoluntarios", voluntarios);
        if (spanVoluntarios) spanVoluntarios.textContent = voluntarios;
      }
    });
  }

  // --- Formulario de donación ---
  const formDonacion = document.getElementById("formDonacion");
  if (formDonacion) {
    formDonacion.addEventListener("submit", function(e) {
      e.preventDefault();

      const email = this.donacionEmail.value.trim();
      const categoria = this.categoria.value;
      const descripcion = this.descripcion.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email) || !categoria || !descripcion) {
        alert("Completá todos los campos correctamente.");
        return;
      }

      alert("¡Gracias por tu donación! Nos contactaremos para coordinar la entrega.");
      this.reset();

      // Si la donación es exitosa sumo una donación
      donaciones += 1;
      localStorage.setItem("contadorDonaciones", donaciones);
      if (spanDonaciones) spanDonaciones.textContent = donaciones;
    });
  }
});
