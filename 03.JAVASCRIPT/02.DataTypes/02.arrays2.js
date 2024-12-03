const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)                 // store the element of dc_heros asd a single element in array

// console.log(marvel_heros);                  // print only 4 element in array
// console.log(marvel_heros[2]);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// Sread
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, 4, [5, 6], 7, [5, 3, [5, 3, 4]]]
const new_array = another_array.flat(Infinity)
// console.log(new_array);

// console.log(Array.isArray("Shubham"));
// console.log(Array.from("Shubham"));
// console.log(Array.from({name: "Shubham"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


