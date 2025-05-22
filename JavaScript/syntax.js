function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}


function devide(a,b) {
    if(b === 0) {
        return 'Error: Devision by zero';
    }
    return a / b;
}

function calculator(num1, num2, operation) {
    switch(operation) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "devide":
            return devide(num1, num2);
        default:
            return "Invalid Operation";
    }
}

console.log(calculator(10, 5, "add"));
console.log(calculator(10, 0, "devide"));

for (let i = 1; i <= 10; i++) {
    if(i % 2 ){
        console.log(i + " is an even number.");
    }
}

let colors = ['red', 'green', 'blue'];

for(let color of colors) {
    console.log(color);
}

let numbers = [10, 20, 30];

for (let index in numbers) {
  console.log(`Index: ${index}, Value: ${numbers[index]}`);
}
