// Get our elements

const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress-filled');

const toggle = player.querySelector('.toggle');
const itoggle = toggle.querySelector('.fa-play')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player-slider')
const fullscreen = player.querySelector('.fa-arrows-alt')

console.dir(fullscreen)

// Build our function
function togglePlay() {
  const method = video.paused ? 'play' : 'pause'
  video[method]();

  // Como video es un array y accedemos a sus elementos como video.play() o video.pause() lo podríamos reescribir
  // como video['play']() o video['pause']()
}

function updateButton() {
  const icon = this.paused ? 'fa-play' : 'fa-pause'
  itoggle.classList.remove('fa-pause','fa-play')
  itoggle.classList.add(icon)
}

function skip() {
  video.currentTime += parseInt(this.dataset.skip)
}

function handleRangeUpdate() {
  console.log(this.name, this.value)
  video[this.name] = this.value
}

function handleProgress() {
  const percent = video.currentTime / video.duration * 100
  progressBar.style.flexBasis = `${percent}%`
  // cambia la propiedad flex-basis de la clase .progress-filled
}

function scrub(e) {
  // e.offsetX nos dice la coordenada X dentro del objeto
  const time = e.offsetX / progress.offsetWidth * video.duration
  video.currentTime = time
}

let isDown = false
function downMouse() {
  isDown = !isDown
}

function goFullScreen() {
  video.requestFullscreen()
}

// Build our listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('timeupdate', handleProgress)
video.addEventListener('pause', updateButton)
toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => {
  button.addEventListener('click', skip)
});

ranges.forEach(range => {
  range.addEventListener('change', handleRangeUpdate)
});

progress.addEventListener('click', scrub)

// Esta forma de escribirlo indica que, al moverse el mouse, si está isDown, entonces ejecuta scrub
progress.addEventListener('mousemove', (e) => isDown && scrub(e))
progress.addEventListener('mousedown', downMouse)
progress.addEventListener('mouseup', downMouse)

fullscreen.addEventListener('click', goFullScreen)
