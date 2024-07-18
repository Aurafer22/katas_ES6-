// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
// function findArrayIndex(array, text) {}

// Ej array:
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === text.toLowerCase()) {
      return `${array[i]} está en la posición ${i}`
    }
  }
}
console.log(findArrayIndex(mainCharacters, 'han solo'))

const random = ['coche', 'perro', 'Luis', 'casa', 'TELEFONO']
console.log(findArrayIndex(random, 'LUIS'))

const paises = [
  'España',
  'Republica Checa',
  'Inglaterra',
  'Estados Unidos',
  'Francia',
  'Italia',
  'Portugal'
]

console.log(findArrayIndex(paises, 'FRANCIA'))
