const preguntas = [
  {
    pregunta: '¿Cuál es el animal que tiene cola y ladra?',
    respuesta: 'perro'
  },
  {
    pregunta: '¿Cuál es el animal que maulla y tiene uñas?',
    respuesta: 'gato'
  },
  {
    pregunta: '¿Es un ave y no vuela, pero nada muy bien. ¿Quién soy?',
    respuesta: 'pinguino'
  },
  {
    pregunta: '¿Qué animal encuentras en la granja, no vuela, ni grazna, pero da leche?',
    respuesta: 'vaca'
  },
  {
    pregunta: '¿Qué animal tiene rayas y vive en la selva?',
    respuesta: 'tigre'
  },
  {
    pregunta: '¿Cuál es el animal más grande del mundo?',
    respuesta: 'ballena'
  },
  {
    pregunta: '¿Cuál es el animal más rápido del mundo?',
    respuesta: 'chita'
  },
  {
    pregunta: '¿Quién es el rey de la selva?',
    respuesta: 'leon'
  },
  {
    pregunta: '¿Qué animal repite todo?',
    respuesta: 'loro'
  },
];

let preguntaActual = 0;
let puntaje = 0;
let nombreJugador = '';

document.addEventListener('DOMContentLoaded', function() {
  solicitarNombre();
});

function solicitarNombre() {
  const nombre = prompt('¡Bienvenido! Por favor, ingresa tu nombre:');
  if (nombre) {
    nombreJugador = nombre;
    mostrarPregunta();
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

// Cargar datos desde un archivo JSON local
fetch('./data/preguntas.json')
  .then(response => response.json())
  .then(data => {
    preguntas.push(...data);
  })
  .catch(error => console.error('Error al cargar los datos:', error));

  fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes procesar las preguntas recibidas
  })
  .catch(error => console.error('Error al cargar las preguntas:', error));