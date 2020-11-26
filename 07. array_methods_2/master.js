const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

// Revisa todo el array y devuelve si al menos un registro cumple con la condicion
const isAdult = people.some(obj => (new Date()).getFullYear() - obj.year >= 18)
console.log({isAdult})

// Revisa todo el array y devuelve si todos los registros cumplen con la condicion
const allAdults = people.every(obj => (new Date()).getFullYear() - obj.year >= 18)
console.log({allAdults})

// Revisa el array y devuelve el primer registro que encuentra con la condicion
const comment = comments.find(obj => obj.id === 2039842)
console.log(comment)

// Regresa el indice del objeto que cumple con la condicion
const index = comments.findIndex(obj => obj.id === 2039842)
console.log(index)

// La funcion splice modifica el array (a partir de que elemento, cuantos elementos elimina, si deseas agregar algún elemento adicional en este espacio)
// La funcion slice divide sin modificar el array (a partir de que elemento, hasta que elemento)
// Los tres puntos anteriores ... es para abrir el array (en pocas palabras para eliminar el [] y queden los elementos)
console.log(comments)

const newComments = [...comments.slice(0,index), ...comments.slice(index+1)]
console.log(newComments)

const numbers = [1,2,3,4,5,6,7,8,9,10,11]
console.log(numbers)
console.log(...numbers)
console.log([...numbers])

const pares = numbers.filter(element => element % 2 == 0)
console.log(pares)
