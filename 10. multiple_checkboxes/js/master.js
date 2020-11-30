const checks = document.querySelectorAll('.item input')

let lastChecked

function indexChecked(e) {

  let inBetween = false

  if (e.shiftKey) {
    checks.forEach(check => {

      if (check === this || check === lastChecked) {
        inBetween = !inBetween
      }

      if (inBetween) {
        check.checked = true
      }
    });
  }

  lastChecked = this
}

checks.forEach(check => {
  check.addEventListener('click', indexChecked)
});
