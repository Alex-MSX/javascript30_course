const hourHand = document.querySelector('.hour-hand');
const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');

function setDate() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDegrees = 360 * hour / 12 + 90;
  const minutesDegrees = 360 * minutes / 60 + 90;
  const secondsDegrees = 360 * seconds / 60 + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
}

setInterval(setDate,1000)
