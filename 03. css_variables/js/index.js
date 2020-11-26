const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => {
  input.addEventListener('mousemove', updateCSS)
  input.addEventListener('change', updateCSS)
});

function updateCSS() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
