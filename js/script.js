const preguntas = [];

let preguntaActual = 0;
let puntaje = 0;
let nombreJugador = '';

document.addEventListener('DOMContentLoaded', function() {
 nombreJugador = sessionStorage.getItem('nombreJugador') || '';
 if (!nombreJugador) {
   solicitarNombre();
 } else {
   puntaje = JSON.parse(localStorage.getItem('puntaje')) || 0;
   mostrarPuntaje();
 }
});

function solicitarNombre() {
 const nombre = prompt('¡Bienvenido! Por favor, ingresa tu nombre:');
 if (nombre) {
   nombreJugador = nombre;
   sessionStorage.setItem('nombreJugador', nombre);
   mostrarPuntaje();
   const responderBtn = document.getElementById('responderBtn');
   responderBtn.addEventListener('click', verificarRespuesta);
 } else {
   alert('Por favor, ingresa tu nombre para comenzar el juego.');
   solicitarNombre();
 }
}

function mostrarPregunta() {
 const preguntaDiv = document.getElementById('pregunta');
 preguntaDiv.textContent = preguntas[preguntaActual].pregunta;
}

function verificarRespuesta() {
 const respuestaInput = document.getElementById('respuestaInput').value;
 if (validarRespuesta(respuestaInput)) {
   if (respuestaInput.toLowerCase() === preguntas[preguntaActual].respuesta) {
     mostrarRespuesta('¡Respuesta correcta!');
     puntaje++;
     localStorage.setItem('puntaje', JSON.stringify(puntaje));
   } else {
     mostrarRespuesta('Respuesta incorrecta. Inténtalo de nuevo.');
   }
 } else {
   mostrarRespuesta('Por favor, ingresa solo letras.');
 }

 preguntaActual++;
 if (preguntaActual < preguntas.length) {
   mostrarPregunta();
 } else {
   const responderBtn = document.getElementById('responderBtn');
   responderBtn.disabled = true;
   mostrarPuntajeFinal();
 }
}

function validarRespuesta(respuesta) {
 const regex = /^[a-zA-Z]+$/;
 return regex.test(respuesta);
}

function mostrarRespuesta(respuesta) {
 const respuestaDiv = document.getElementById('respuesta');
 respuestaDiv.textContent = respuesta;
}

function mostrarPuntaje() {
 const puntajeDiv = document.getElementById('puntaje');
 puntajeDiv.textContent = `¡${nombreJugador}, tu puntaje actual es: ${puntaje}!`;
}

function mostrarPuntajeFinal() {
 const puntajeDiv = document.getElementById('puntaje');
 puntajeDiv.textContent = `¡${nombreJugador}, tu puntaje final es: ${puntaje}!`;
}

fetch('./preguntas.json')
 .then(response => response.json())
 .then(data => {
  preguntas.push(...data);
  mostrarPregunta();
 })
 .catch(error => {
  console.error('Error al cargar los datos:', error);
  alert('Hubo un problema al cargar las preguntas. Por favor, intenta recargar la página.');
 });