const checks = document.querySelectorAll('.item input')


function indexChecked() {
  const checkboxes = [...document.querySelectorAll('.item input')]
  return checkboxes.findIndex(checkbox => checkbox.checked == true)
}

checks.forEach(check => {
  check.addEventListener('change', getIndex)
});


function getIndex(e) {
  console.log(this)
  console.log(e)
}
