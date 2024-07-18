// 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
// .filter() y usa .reduce() para conseguir la media de sus .score.
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
// array .gender.

const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
]

const allGenders = [];
const mediaScore = [];
for (const videogame of videogames) {
  const genders = videogame.genders;
  console.log(genders);
  if (genders.find((element) => element === "RPG")) {
    allGenders.push(videogame);
  }
}
console.log(allGenders);
console.log(mediaScore);

for (const gender of allGenders) {
  const score = gender.score;
  mediaScore.push(score)
}
console.log(mediaScore);
const resultado = mediaScore.reduce((accumulator, currentValue) => accumulator + currentValue) / mediaScore.length;
console.log(resultado);