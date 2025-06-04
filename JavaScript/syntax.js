for (let i = 1; i <= 10; i++) {
    console.log(i);
}  

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let animals = ["cat", "dog", "rabbit", "parrot"];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}


let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);

let names = ["ali", "sarah", "john", "andrei"];

for (let i = 0; i < names.length; i++) {
    console.log("Hello," +names[i] + "!");
}

let original = [1, 2, 3, 4];
let doubled = [];

for(let i = 0; i < original.length; i++) {
    doubled.push(original[i] * 2);
}
console.log(doubled);

for (let i = 1; i <= 20; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}

let count = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        count++;
    }
}

console.log("Odd numbers are:", count);