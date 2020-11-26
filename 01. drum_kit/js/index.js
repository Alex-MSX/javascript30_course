
function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

  if (!audio) return; // Evitar que la función continue

  audio.currentTime = 0; // Para que lo pueda ejecutar multiples veces
  audio.play() ;
  key.classList.add('playing');
}

// Agregar a la ventana el listener para las teclas
window.addEventListener('keydown', playSound)

// Una vez que termine la animación podemos agregar un listener para cuando la transición terminó

const keys = document.querySelectorAll('.key');

keys.forEach(key => {key.addEventListener('transitionend', removeTransition)})

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Saltará todos aquellos eventos que no sean transform
  this.classList.remove('playing');
}
