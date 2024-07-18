// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const arrayNotas = [];
for (const alum of exams) {
  arrayNotas.push(alum.score)
}
console.log(arrayNotas);

const notaTotal = arrayNotas.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(notaTotal);


// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().

const aprobados = [];
for (const aprobado of arrayNotas) {
  if (aprobado >= 5) {
    aprobados.push(aprobado);
  }
}
console.log(aprobados);

const allAprobados = aprobados.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(allAprobados);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const notaMedia = arrayNotas.reduce((accumulator, currentValue) => accumulator + currentValue) / arrayNotas.length;
console.log(notaMedia);