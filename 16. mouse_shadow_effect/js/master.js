const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const shadowSize = 500

hero.addEventListener('mousemove', shadow)

function shadow(e) {
  //const width = hero.offsetWidth
  //const height = hero.offsetHeight

  // Es la forma de poner en una línea las variables anteriores
  const { offsetWidth: width, offsetHeight: height} = hero

  // Traigo las coordenadas del cursor usando el mismo método
  let { offsetX: x, offsetY: y} = e

  //NOTA IMPORTANTE!!! : this siempre hará referencia al objeto que le agregamos el addEventListener, mientras que e.target podría ser él mismo o un "hijo" de this
  //console.log(this, e.target)
  if (this !== e.target) {
    x += e.target.offsetLeft
    y += e.target.offsetTop
  }

  const xShadow = Math.round((x / width * shadowSize) - (shadowSize / 2))
  const yShadow = Math.round((y / height * shadowSize) - (shadowSize / 2))

  text.style.textShadow = `${xShadow}px ${yShadow}px 10px rgba(255,0,255,0.7), ${-xShadow}px ${-yShadow}px 10px rgba(0,255,255,0.7), ${xShadow}px ${-yShadow}px 10px rgba(0,0,255,0.7), ${-xShadow}px ${yShadow}px 10px rgba(255,255,0,0.7)`
}
