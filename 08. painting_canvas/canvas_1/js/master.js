const canvas = document.getElementById('draw');
const color = document.getElementById('color');
const thickness = document.getElementById('thickness')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight - 100;

ctx.strokeStyle = color.value
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = thickness.value;

let isDrawing = false;
let lastX = 0, lastY = 0;

function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke();

  // cuando se requieren definir varias variables al mismo tiempo se usa mejor arrays
  // lastX = e.offsetX
  // lastY = e.offsetY

  [lastX, lastY] = [e.offsetX, e.offsetY]
}

function activateDraw(e) {
    [lastX, lastY] = [e.offsetX, e.offsetY]
    isDrawing = true;
}

function deactivateDraw() {
  isDrawing = false;
  [lastX, lastY] = [0, 0]
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', activateDraw)
canvas.addEventListener('mouseup', deactivateDraw)
canvas.addEventListener('mouseout', deactivateDraw)

color.addEventListener('mouseout', () => ctx.strokeStyle = color.value)
thickness.addEventListener('change', () => ctx.lineWidth = thickness.value)
