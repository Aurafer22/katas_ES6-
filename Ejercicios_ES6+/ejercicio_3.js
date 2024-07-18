// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
const newPointsList = [...pointsList]
console.log(newPointsList)

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const newToy = { ...toy }
console.log(newToy)

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.
const numbers = [32, 54, 21, 64, 75, 43]
const numbers2 = [54, 87, 99, 65, 32]
const allNumbers = [...numbers, ...numbers2]
console.log(allNumbers)

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.
const juguete = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const newJuguete = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const allJuguetes = { ...juguete, ...newJuguete }
console.log(allJuguetes)

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const newColors = [...colors]
console.log(newColors)
console.log(newColors[2])
newColors.splice(2, 1)
console.log(newColors)
console.log(colors)
