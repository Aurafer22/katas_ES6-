// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const olderAges = ages.filter((age) => age > 18)
console.log(olderAges)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
const edades = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const pares = edades.filter((edad) => edad % 2 === 0)
console.log(pares)

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const streamersOK = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)
console.log(streamersOK)

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.
const influencers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const nameWithU = influencers.filter((influencer) =>
  influencer.name.includes('u')
)
console.log(nameWithU)

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.
const influLegend = influencers.filter((influencer) =>
  influencer.gameMorePlayed.includes('Legends')
)

influLegend.map((influencer) => {
  if (influencer.age > 35) {
    influencer.gameMorePlayed = influencer.gameMorePlayed.toUpperCase()
  }
})

console.log(influLegend)
