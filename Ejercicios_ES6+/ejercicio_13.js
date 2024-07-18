// Usando la función anterior beneficiate de poder conocer el indice del array
// para crear una función llamada removeItem que pasandole un array y un texto
// como parametros (los mismos parametros que en el anterior ejercicio) llame a
// la función anteriormente creada findArrayIndex y obten el indice para
// posteriormente usar la función de javascript .splice() para eliminar el
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan
// correctamente.

const paises = [
  'España',
  'Republica Checa',
  'Inglaterra',
  'Estados Unidos',
  'Francia',
  'Italia',
  'Portugal'
]
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === text.toLowerCase()) {
      return i
    }
  }
}
console.log(findArrayIndex(paises, 'italia'))

let newArray = []
function removeItem(array, text) {
  newArray = [...array]
  const index = findArrayIndex(array, text)
  newArray.splice(index, 1)
  return newArray
}

console.log(removeItem(paises, 'italia'))

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
console.log(removeItem(mainCharacters, "anakin"));

