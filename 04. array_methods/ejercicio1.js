const categories = document.getElementById('mw-pages');
const links = categories.querySelectorAll('a');
const boulevards = Array.from(links)


const filteredBoulevards = boulevards.filter(boulevard => boulevard.text.includes('de'))
console.table(filteredBoulevards)

// Usamos map cuando queremos solo una columna de toda la tabla
const filteredOnlyBoulevards = boulevards.map(boulevard => boulevard.text).filter(boulevard => boulevard.includes('de'))
console.table(filteredOnlyBoulevards)

// Ejemplo, si quisiera dos columnas

const filterTwoColumns = boulevards.map(boulevard => [boulevard.text, boulevard.origin])
console.table(filterTwoColumns)
