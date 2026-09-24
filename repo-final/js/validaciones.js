// esto es del formulario (creo oswalys lo hizo)
const REGEX_NOMBRE = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{3,100}$/;
const REGEX_CORREO = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

function mostrarError(idCampo, idError, mensaje) {
  const campo = document.getElementById(idCampo);
  const error = document.getElementById(idError);

  campo.closest(".campo").classList.add("invalido");
  error.textContent = mensaje;
}

function limpiarError(idCampo, idError) {
  const campo = document.getElementById(idCampo);
  const error = document.getElementById(idError);

  campo.closest(".campo").classList.remove("invalido");
  error.textContent = "";
}

function validarNombre() {
  const valor = document.getElementById("nombre").value.trim();

  if (valor === "") {
    mostrarError("nombre", "error-nombre", "El nombre es obligatorio.");
    return false;
  }
  if (!REGEX_NOMBRE.test(valor)) {
    mostrarError(
      "nombre",
      "error-nombre",
      "Ingresa solo letras (mínimo 3 caracteres, máximo 100)."
    );
    return false;
  }

  limpiarError("nombre", "error-nombre");
  return true;
}

function validarCorreo() {
  const valor = document.getElementById("correo").value.trim();

  if (valor === "") {
    mostrarError("correo", "error-correo", "El correo es obligatorio.");
    return false;
  }
  if (!REGEX_CORREO.test(valor)) {
    mostrarError(
      "correo",
      "error-correo",
      "Usa un correo Duoc poh ."
    );
    return false;
  }

  limpiarError("correo", "error-correo");
  return true;
}

function validarMotivo() {
  const valor = document.getElementById("motivo").value;

  if (valor === "") {
    mostrarError("motivo", "error-motivo", "pA k nos llama.");
    return false;
  }

  limpiarError("motivo", "error-motivo");
  return true;
}

function validarComentario() {
  const valor = document.getElementById("comentario").value.trim();

  if (valor === "") {
    mostrarError("comentario", "error-comentario", "Escribe tu comentario.");
    return false;
  }
  if (valor.length > 500) {
    mostrarError(
      "comentario",
      "error-comentario",
      "El comentario no puede superar los 500 caracteres por que no tenemos el presupuesto suficinete."
    );
    return false;
  }

  limpiarError("comentario", "error-comentario");
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");
  if (!form) return;

 //Esto es donde se valida el usuario UwU XoxO
  document.getElementById("nombre").addEventListener("input", validarNombre);
  document.getElementById("correo").addEventListener("input", validarCorreo);
  document.getElementById("motivo").addEventListener("change", validarMotivo);
  document.getElementById("comentario").addEventListener("input", validarComentario);

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombreOk = validarNombre();
    const correoOk = validarCorreo();
    const motivoOk = validarMotivo();
    const comentarioOk = validarComentario();

    const mensajeExito = document.getElementById("mensaje-exito");

    if (nombreOk && correoOk && motivoOk && comentarioOk) {
      mensajeExito.textContent = "¡Gracias! Tu mensaje fue enviado con éxito una de nuestras ia lo.";
      form.reset();
    } else {
      mensajeExito.textContent = "";
    }
  });
});
