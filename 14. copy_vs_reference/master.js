console.log('Ejercicio de referencia de números y strings')
let number1 = 50
let number2 = number1
console.log(number1, number2)

number2 = 100
console.log(number1, number2)


let name1 = 'Alejandro'
let name2 = name1
console.log(name1, name2)

name1 = 'Javier'
console.log(name1, name2)

// Los arrays hacen referencia mientras que los números y strings no
console.log('')
console.log('Ejercicio de referencia de un array')
let array1 = [1,2,3,4,5,6,7,8,9]
let array2 = array1
console.log(array1, array2)

array2[3] = 0
console.log('Existe referencia', array1, array2)

// para realizar la copia de un array se puede hacer utilizando los siguientes métodos
// 1. función slice(inicio, fin sin considerarlo) es el simil a python array[inicio:fin]
// 2. [].concat(array)
// 3. [...array]
// 4. Array.from(array)
console.log('')
console.log('Como copiar un array sin que tengan la propiedad de referencia')
const animals = ['ant', 'bison', 'camel', 'elephant', 'duck', 'turtle'];
const copyAnimals1 = animals.slice()
const copyAnimals2 = [].concat(animals)
const copyAnimals3 = [...animals]
const copyAnimals4 = Array.from(animals)
console.log(animals, copyAnimals1, copyAnimals2, copyAnimals3, copyAnimals4)

console.log('')
console.log('Ejercicio de copia de un array')
let array3 = [1,2,3,4,5,6,7,8,9]
let array4 = array3.slice()
console.log(array3, array4)

array4[3] = 0
console.log('Ya no existe referencia', array3, array4)

console.log('')
console.log('Ejercicio de referencia de un objeto')
let person1 = {
  name:'Alejandro',
  age:32
}

let person2 = person1
console.log(person1, person2)

person2.email = 'email@hotmail.com'
console.log(person1, person2)


// para realizar la copia de un objeto se puede hacer utilizando los siguientes métodos
// 1. Object.assign({}, object)
console.log('')
console.log('Como copiar un objeto sin que tengan la propiedad de referencia')
let person3 = Object.assign({}, person1)
person3.lastname = 'Moreno'
console.log(person1, person3)
