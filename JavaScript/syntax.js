
let tasks = ["Lundry", "Study", "Skate", "Workout"];

for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
}

for (let task of tasks) {
    console.log(`Task: ${task}`);
}

for (let index in tasks) {
    console.log(`Index:${index}, Task:${tasks[index]}`);
}
tasks.push("Walk the dog");

tasks[1] = "Bring the magic";

console.log(tasks);

tasks.shift();

console.log(tasks);


tasks.splice(3, 0, "physics");

console.log(tasks);


let numbers1 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

let numbers = [1, 2, 3, 4, 5];


for (let num of numbers) {
    console.log(num);
}

let numbers2 = [1, 2, 3, 4, 5];

for (let index in numbers2) {
    console.log(`Index: ${index}, Value:${numbers[index]}`);

}






let sentence = "JavaScript is awesome!";

console.log(sentence.toUpperCase());



let words = sentence.split(" ");
console.log(words);

let newSentence = sentence.replace("awesome", "powerfull");

console.log(newSentence);

console.log(sentence.includes("JavaScript"));