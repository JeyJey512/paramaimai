// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "SOS CAPAZ, DE GUIAR", time: 21 },
  { text: "MI ENERGÍA, SI BAJAS", time: 26 },
  { text: "SOS EL SOS, QUE LLEGÓ PA' ALUMBRAR", time: 31 },
  { text: "SEÑORITA, EN SU CUARTO SOY SOLO DE USTED", time: 39 },
  { text: "SI SUS PIERNAS SON UN JUEGO, DESEO PERDER", time: 48 },
  { text: "ESTÁS HACIENDO HERMOSO ESTE DESASTRE", time: 59},
  { text: "ENVIDIO AL ESPEJO POR MIRARTE", time: 63 },
  { text: "QUIERO APRENDERME TU CUERPO HASTA EL AMANECER", time: 67 },
  { text: "ALGO MÁS ALLÁ DE LA PALABRA", time: 76 },
  { text: "ESQUE YO SIN VOS YA NO SOY NADA", time: 81 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);