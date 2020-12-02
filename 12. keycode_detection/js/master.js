const password = 'glasimonix'
let pressed = []

window.addEventListener('keyup', (e) => {
  pressed.push(e.key)
  let phrase = pressed.slice(-password.length)

  if (phrase.join('') === password) {
    console.log('Correct!')
  }
})
