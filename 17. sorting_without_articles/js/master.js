const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const list = document.querySelector('.bands')

const articles = ['a ', 'an ', 'the ']

// Esta es la forma de ordenar a la antigüita
bands.sort(function(a,b) {
  if(a > b) {
    return 1
  } else {
    return -1
  }
})
console.log(bands)

// Esta es la forma de ordenar simplificada
bands.sort((a,b) => a > b ? 1 : -1)
console.log(bands)

// Esta fue mi prueba de concepto
const resultado = articles.some(article => 'a amigo'.includes(article))
console.log(resultado)



// Esta es mi solución inicial de sort without articles
function removeArticle(text, articles) {
  const index = articles.findIndex(article => text.includes(article))
  return text.replace(articles[index],'')
}

const sortedBands = bands.sort((a,b) => {
  newA = a.toLowerCase()
  newB = b.toLowerCase()

  if (articles.some(article => newA.includes(article))) {
    newA = removeArticle(newA, articles)
  }

  if (articles.some(article => newB.includes(article))) {
    newB = removeArticle(newB, articles)
  }

  if (newA > newB) {
    return 1
  } else {
    return -1
  }
})

function populateList(array) {
  list.innerHTML = array.map(el => `<li>${el}</li>`).join('') //Para evitar la coma

  // Utilizar map es mejor que foreach
  // array.forEach(el => {
  //   list.innerHTML += `<li>${el}</li>`
  // });
}

//populateList(sortedBands)


// Segunda solución utilizando regex
function stripArticle(text) {
  const expr = '^(' + articles.join('|') + ')'
  const regex = new RegExp(expr,'i')
  return text.replace(regex,'')
}

const sortedBands1 = bands.sort((a,b) => stripArticle(a) > stripArticle(b) ? 1 : -1)

populateList(sortedBands1)
