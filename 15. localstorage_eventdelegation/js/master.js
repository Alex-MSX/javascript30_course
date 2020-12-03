const addForm = document.querySelector('.add-items')
const itemList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []

function addItem(e) {
  // e.preventDefault evita que el form actualice
  e.preventDefault();

  const textbox = this.querySelector('input[name="item"]')

  const item = {
    text: textbox.value,
    done: false
  }

  items.push(item)
  populateList(items, itemList)

  // Voy a guardar mi lista de items en localStorage(nombre,valor)
  // Lo puedo visualizar en console >> application >> localStorage
  // NOTA: Solo puedo guardar strings en localStorage, así que uso JSON.stringify
  localStorage.setItem('items', JSON.stringify(items))

  // reset() borra el formulario
  this.reset()
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
          <label for="item${i}">${plate.text}</label>
        </li>
        `
  }).join('') // map devuelve un array, join('') lo convierte a texto y lo pone en el innerHTML de la lista
}

// Yo había hecho un addEventListener sobre el click del boton pero es cierto que lo puedes hacer con enter
addForm.addEventListener('submit', addItem)

// Aqui cree los addEventListeners una vez que ya había creado los objetos. El problema es que si agrego
// un nuevo elemento este no tendrá eventListener, así que para agregar un objeto nuevo con eventListener
// integrado, se realiza lo siguiente

itemList.addEventListener('click', toggleDone)

function toggleDone(e) {
  if (!e.target.matches('input')) return; // no hace nada si es un input
  const index = e.target.dataset.index
  items[index].done = !items[index].done
  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemList)
}

// Como supuestamente tengo localStorage, puedo hacer que cuando la página cargue, traer el objeto
populateList(items, itemList)
