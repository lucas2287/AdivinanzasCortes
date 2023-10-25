var preguntas = [
  {
    pregunta: '¿Cuál es el animal que tiene cola y ladra?',
    respuesta: 'perro'
  },
  {
    pregunta: '¿ cual es el animal que maulla y tiene uñas?',
    respuesta: 'gato'
  },
  {
    pregunta: '¿Es un ave y no vuelva, pero nada muy bien. quien soy?',
    respuesta: 'pinguino'
  },
  {
    pregunta: '¿Qué animal encontras en la granja, no vuela, ni granza, pero da leche?',
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
    pregunta: '¿Cuál es el animal más rapido del mundo?',
    respuesta: 'chita'
  },
  {
    pregunta: '¿Quien es el rey de la selva?',
    respuesta: 'leon'
  },
  {
    pregunta: '¿Que animal repite todo?',
    respuesta: 'loro'
  },
];

var preguntaActual = 0;

document.addEventListener('DOMContentLoaded', function() {
  mostrarPregunta();
  
  var responderBtn = document.getElementById('responderBtn');
  responderBtn.addEventListener('click', verificarRespuesta);
});

function mostrarPregunta() {
  var preguntaDiv = document.getElementById('pregunta');
  preguntaDiv.textContent = preguntas[preguntaActual].pregunta;
}

function verificarRespuesta() {
  var respuestaInput = document.getElementById('respuestaInput').value;
  if (validarRespuesta(respuestaInput)) {
    if (respuestaInput.toLowerCase() === preguntas[preguntaActual].respuesta) {
      mostrarRespuesta('¡Respuesta correcta!');
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
    var responderBtn = document.getElementById('responderBtn');
    responderBtn.disabled = true;
  }
}

function validarRespuesta(respuesta) {
  var regex = /^[a-zA-Z]+$/;
  return regex.test(respuesta);
}

function mostrarRespuesta(respuesta) {
  var respuestaDiv = document.getElementById('respuesta');
  respuestaDiv.textContent = respuesta;
}