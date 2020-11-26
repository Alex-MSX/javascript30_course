const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d')

let color = 0
let direction = true

canvas.width = window.innerWidth
canvas.height = window.innerHeight - 100;

ctx.lineWidth = 5;
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

let isDrawing = false;
let lastX = 0, lastY = 0;

function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${color}, 100%, 50%)`

  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke();

  // cuando se requieren definir varias variables al mismo tiempo se usa mejor arrays
  // lastX = e.offsetX
  // lastY = e.offsetY
  [lastX, lastY] = [e.offsetX, e.offsetY]

  color++

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction
  }

  if (direction) {
    console.log(direction, ctx.lineWidth)
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--
  }
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
