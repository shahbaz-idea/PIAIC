
let city1 = 'Lahore';
let city2 = 'Islamabad';
let intVal = 2;
let numVal = 5;
const lstFavPlaces:Array<string> = ["Paris","Switzerland","New Zeeland","Istanbul","London"];

console.log("================= Condition 1 ================= ");
console.log("Is city == city2? I predict False.");
console.log(city1 == city2);

console.log("================= Condition 2 ================= ");
console.log("Is city != city2? I predict True.");
console.log(city1 != city2);

console.log("================= Condition 3 ================= ");
console.log("Is city == 'Lahore'? I predict False.");
console.log(city1.toLowerCase() == 'Lahore');

console.log("================= Condition 4 ================= ");
console.log("Is city1.toLowerCase() == ('Lahore').toLocaleLowerCase()? I predict True.");
console.log(city1.toLowerCase() == ('Lahore').toLocaleLowerCase());

console.log("================= Condition 5 ================= ");
console.log("Is intVal <= numVal? I predict True.");
console.log(intVal <= numVal);

console.log("================= Condition 6 ================= ");
console.log("Is intVal < 2? I predict False.");
console.log(intVal < 2);

console.log("================= Condition 7 ================= ");
console.log("Is intVal >= 3? I predict False.");
console.log(intVal >= 3);

console.log("================= Condition 8 ================= ");
console.log("Is intVal == numVal? I predict False.");
console.log(intVal == numVal);

console.log("================= Condition 9 ================= ");
console.log("Is intVal >= numVal? I predict False.");
console.log(intVal >= numVal);

console.log("================= Condition 10 ================= ");
console.log("Is intVal != numVal? I predict True.");
console.log(intVal != numVal);

console.log("================= Condition 11 ================= ");
console.log("Is intVal >= numVal && intVal != numVal? I predict False.");
console.log(intVal >= numVal && intVal != numVal);

console.log("================= Condition 12 ================= ");
console.log("Is intVal >= numVal || intVal != numVal? I predict True.");
console.log(intVal >= numVal || intVal != numVal);

console.log("================= Condition 13 ================= ");
console.log("Is lstFavPlaces.some(x => x == 'London')? I predict True.");
console.log(lstFavPlaces.some(x => x == 'London'));

console.log("================= Condition 14 ================= ");
console.log("Is lstFavPlaces.some(x => x == 'Lahore')? I predict False.");
console.log(lstFavPlaces.some(x => x == 'Lahore'));

export {};