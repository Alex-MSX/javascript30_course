const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


// Ajax sirve para solicitar información a un servidor sin la necesidad de ACTUALIZAR LA PAGINA y la solicitud nos devolverá un archivo en formato JSON

// Para realizar un Ajax Request usamos fetch(url)
// Para utilizar la información una vez que se complete la solicitud utilizamos .then() y la función que queremos ejecutar
let cities = [];

const prom = fetch(endpoint)
.then(function(val) {
  // convierte y regresa la promesa a formato json
  return val.json()
})
.then(function(data) {
  // convierte el archivo json a un array
  cities = data
})

// Al ser asynchronus, primero se ejecutva mi código y despues cities
console.log("Mi código es Asynchronus")

function findMatches(wordToMatch, array) {
  return array.filter(place => {
    // crear una regular expression para buscar la palabra. 'gi' es global insensitive (no hace caso a mayusculas o minusculas)
    const regex = new RegExp(wordToMatch, 'gi');
    let inCity = place.city.match(regex);
    let inState = place.state.match(regex);

    return (inCity || inState)
  })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  let value = this.value

  if (value.length > 1) {
    const matchedCities = findMatches(value, cities);
    const html = matchedCities.map(place => {
      const regex = new RegExp(value, 'gi')
      const cityName = place.city.replace(regex, `<span class="hl">${value}</span>`)
      const stateName = place.state.replace(regex, `<span class="hl">${value}</span>`)

      return `<li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
              </li>`
    }).join('')

    suggestions.innerHTML = html
    return true;
  }

  suggestions.innerHTML = '<li>Filter for a City</li><li>Or a State</li>'
}

const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

input.addEventListener('keyup', displayMatches)
