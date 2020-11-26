const inventors = [
  {first:'Albert', last:'Einstein', year:1879, passed:1955},
  {first:'Isaac', last:'Newton', year:1643, passed:1727},
  {first:'Galileo', last:'Galilei', year:1564, passed:1642},
  {first:'Marie', last:'Curie', year:1867, passed:1934},
  {first:'Johannes', last:'Kepler', year:1571, passed:1630},
  {first:'Nicolaus', last:'Copernicus', year:1473, passed:1543},
  {first:'Max', last:'Planck', year:1858, passed:1947},
  {first:'Leonardo', last:'da Vinci', year:1452, passed:1519},
  {first:'Thomas', last:'Edison', year:1847, passed:1931},
  {first:'Benjamin', last:'Franklin', year:1706, passed:1790},
]

// Filtrar un array
// Se requiere el uso de una función (la cual por default hace un loop para cada item) la cual devuelve true cuando se cumple la condicion deseada
const fifteen = inventors.filter(inventor => {
  if (inventor.year >= 1400 && inventor.year < 1500) {
    return true;
  }
})

const fifteenShort = inventors.filter(inventor => (inventor.year >= 1400 && inventor.year < 1500))

console.table(fifteen)
console.table(fifteenShort)

// Mapeo de un array
// Se requiere el uso de una función (la cual por default hace un loop para cada item) cuando se desea obtener una operación con los campos del array

const fullNames = inventors.map(inventor => {
  return `${inventor.first} ${inventor.last}`
})

const fullNamesShort = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

console.table(fullNames)
console.table(fullNamesShort)

// Sort un array
// Se requiere el uso de una función (la cual por default hace un loop para cada item y requiere dos parametros obligatorios) y devuelve 1 cuando se cumple la condicion o -1 cuando no se cumple

const ordered = inventors.sort((first, second) => {
  if (first.year > second.year) {
    return 1;
  } else {
    return -1;
  }
})

const orderedShort = inventors.sort((first, second) => first.year > second.year ? 1 : -1)

console.table(ordered)
console.table(orderedShort)

// Reduce un array
// Se requiere el uso de una función (la cual por default hace un loop para cada item) y requiere dos parametros obligatorios, primero la variable a regresar y el item = SUM(*)

const totalYears = inventors.reduce((total, inventor) => {
  total += (inventor.passed - inventor.year)
  return total
}, 0)

console.log(totalYears)

// EJERCICIOS

// Ordena la lista, de acuerdo al número de años vividos por el inventor

const orderByAge = inventors.sort((first,second) => {
  const youngest = first.passed - first.year
  const oldest = second.passed - second.year

  if (youngest > oldest) {
    return 1;
  } else {
    return -1;
  }
})

const orderByAgeShort = inventors.sort((first,second) => {
  const youngest = first.passed - first.year
  const oldest = second.passed - second.year

  return youngest > oldest ? 1 : -1
})

console.table(orderByAge)
console.table(orderByAgeShort)


// 7. sort Exercise
// Sort the people alphabetically by last name
const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

const orderPeopleByFirst = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(', ')
  const [bLast, bFirst] = b.split(', ')

  return aFirst > bFirst ? 1 : -1;
})

console.table(orderPeopleByFirst)

const orderPeopleByLast = people.sort((a,b) => {
  const [aLast, aFirst] = a.split(', ')
  const [bLast, bFirst] = b.split(', ')

  return aLast > bLast ? 1 : -1;
})

console.table(orderPeopleByLast)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const resumen = data.reduce((object, item) => {
  if (!object[item]) {
    object[item] = 0;
  }
  object[item]++;

  return object
}, {})

console.table(resumen)
