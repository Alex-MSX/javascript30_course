const timeNodes = Array.from(document.querySelectorAll('[data-time]'))

const durations = timeNodes.map(time => time.dataset.time)

const seconds = durations.map(time => {
  const [minutes, seconds] = time.split(':').map(parseFloat) // mapea todo el array a Float
  return minutes * 60 + seconds
})

const totalSeconds = seconds.reduce((time, total) => total += time)
console.log(totalSeconds)

// Se puede reducir a lo siguiente

const totSecs = timeNodes
.map(time => time.dataset.time)
.map(time => {
  const [minutes, seconds] = time.split(':').map(parseFloat) // mapea todo el array a Float
  return minutes * 60 + seconds
})
.reduce((time, total) => total += time)
console.log(totSecs)


const hours = Math.floor(totSecs / 3600)
const minutes = Math.floor((totSecs % 3600) / 60)
const secondsLeft = (totSecs % 3600) % 60
console.log(hours, minutes, secondsLeft)
