const marval_heros = ["thor", "Ironman", "spiderman"]

const dc = ["superman", "flash", "batman"]

// we can push a array into a second array -> in this case array directly push into the array

const allHeros = marval_heros.concat(dc)

console.log(allHeros);

const all_heros = [...marval_heros, ...dc]

console.log(all_heros);

const anotherArray = [1, 2, 3, [4, 5, 6,] , [7, 3,5 ,5]]

const flattenArray = anotherArray.flat(Infinity)

console.log(flattenArray);

console.log(Array.from({name: "Harsh"}));

let score1 = 100
let score2 = 100
let score3 = 100
let score4 = 100

console.log(Array.of(score1, score2, score3, score4));