let score =50;

if (score >= 90) {
    console.log('Selamat! Anda mendapatkan nilai A.');
}
else if (score > 80 && score <= 89) {
    console.log('Anda mendapatkan nilai B.');
}
else if (score > 70 && score <= 79) {
    console.log('Anda mendapatkan nilai C.');
}
else if (score > 60 && score <= 69) {
    console.log('Anda mendapatkan nilai D.');
}
else {
    console.log('Anda mendapatkan nilai E.');
}
const stock = 0;
const milkNeeded = 25;

if (stock > milkNeeded) {
  stock = stock - milkNeeded;
  console.log('Processing your order...');
} else {
  console.log('Out of Stock!');
}

console.log('Thank you');
let x;
x = 7;
x = 'JS is great';
console.log(x);


const restaurant ={
    name: "Nama Restoran",
    city: "Kota",
    'favorite drink': "Minuman Favorit",
    'favorite food': "Makanan Favorit",
    isVegan: true,
}
let name= restaurant.name;
let favoriteDrink = restaurant['favorite drink'];
console.log(name);
console.log(favoriteDrink);

const evenNumbers = [];
for(let i=0; i<=100; i++){
    if(i%2 === 0){
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);
const currency = new Map([["USD",14000],["JPY",131],["SGD",11000],["MYR",350]]);
let priceinJPY=3500
let priceinIDR=priceinJPY*currency.get("JPY");
console.log(priceinIDR);
const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

delete artistsAndSongs["Keyakizaka46"];
console.log(artistsAndSongs)

const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

// TODO: Kode untuk menambahkan item Charlie pada index ke-2
phoneticAlphabet.splice(2,0,"Charlie");
console.log(phoneticAlphabet);

function minimal(a,b){
    if(a<b){
        return a;
    }
    else if(a>b){
        return b;
    }
    else if(a===b){
        return a;
    }
}
function power(a,b){
    let hasil=a**b;
    return hasil;   
}
console.log(minimal(2,3));
console.log(power(2,3));
function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

class Animal{
    constructor(name,age,isMammal){
        this.name=name;
        this.age=age;
        this.isMammal=isMammal;
    }
}
class Rabbit extends Animal{
    constructor(name,age,isMammal){
        super(name,age,isMammal);
        this.isMammal=true;
    }
    // eat(){
        // return(${this.name}+"sedang makan");
    // }
}
class Eagle extends Animal{
    constructor(name,age,isMammal,color){
        super(name,age,isMammal);
        this.isMammal=false;
    }
    // fly(){
        // return(${this.name}+"sedang terbang");
    // }
}
const myRabbit = new Rabbit("Labi",2);
const myEagle = new Eagle("Elo",4);
console.log(myRabbit);

const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
  ];
// let niceAuthors = books.filter((books) => books.sales > 1000000);
// console.log(niceAuthors);
// let greatAuthors =niceAuthors.map((niceAuthors) =>{return($niceAuthors.author 'adalah penulis buku ${title} yang sangat hebat!')});
// let niceBooks = books.filter(book => book);
const niceAuthors = books.filter((books) => books.sales > 1000000);
const greatAuthors=niceAuthors.map((niceAuthors) => { return (`${niceAuthors.author} adalah penulis buku ${niceAuthors.title} yang sangat hebat!`)});
console.log(greatAuthors)

class ValidattionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
const validateNumberInput = (input) => {
    if (typeof input !== 'number') {
        throw new ValidattionError('Input must be a number');
    }
}
const detectTriangle = (a, b, c) => {
    try {
        validateNumberInput(a);
        validateNumberInput(b);
        validateNumberInput(c);
    } catch (error) {
        console.log(error.message);
    }
    // validateNumberInput(a);
    // validateNumberInput(b);
    // validateNumberInput(c);
    if (a <= 0 || b <= 0 || c <= 0) {
        throw new ValidattionError('Input must be greater than 0');
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        throw new ValidattionError('Input must form a triangle');
    }
    if (a === b && b === c) {
        return 'equilateral';
    }
    if (a === b || a === c || b === c) {
        return 'isosceles';
    }
    return 'scalene';
}
let triangleType = detectTriangle(2, 2, 2);
console.log(triangleType);  
let b= 'a' ;
let triangleType2 = detectTriangle(2, 2, b);

class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}
function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));

function factorial(n) {
    return n < 2 ? 1 : n * factorial(n - 1);
}
