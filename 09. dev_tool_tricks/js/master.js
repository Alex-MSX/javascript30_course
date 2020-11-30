const p = document.querySelector('.make-green')

function makeGreen() {
  p.style.color = '#BADA55'
  p.style.fontSize = '50px'
}

makeGreen()


// Console dir, nos dice todas las propiedades a las que podemos acceder de los objetos
console.dir(p)

// Console group, nos permite agrupar objetos
const personas = [
  {nombre:'Alejandro Moreno', edad:32, correo:'alejandro.moreno@gmail.com', fuma:'No'},
  {nombre:'Liliana Suárez', edad:28, correo:'lsuarez@yahoo.com', fuma:'Si'},
  {nombre:'Arturo López', edad:15, correo:'arturo.lopez@gmail.com', fuma:'No'},
  {nombre:'Miriam García', edad:40, correo:'mgarcia@hotmail.com', fuma:'No'},
]

personas.forEach(persona => {
  console.groupCollapsed(`${persona.nombre}`)
  console.log(`Nombre: ${persona.nombre}`)
  console.log(`Edad: ${persona.edad}`)
  console.log(`Correo: ${persona.correo}`)
  console.log(`Fuma: ${persona.fuma}`)
  console.groupEnd(`${persona.nombre}`)
});

// Console count, nos permite contar cuantas veces se ejecutó un código
console.groupCollapsed('Loop X')
for (let i = 0; i < 10; i++) {
  //Realicé varias operaciones

  console.count('Terminó loop')
}
console.groupEnd('Loop X')


// Console time, nos permite saber cuanto tiempo se llevó un proceso
console.time('Proceso de fetch Github')
const prom = fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data =>   console.log(data))
console.timeEnd('Proceso de fetch Github')
