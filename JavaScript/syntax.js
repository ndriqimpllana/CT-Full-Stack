function greetUser(){
    console.log("Hello, Student!");
}

function addTwoNumbers(a,b){
    return a + b;
}

function countToFive(){
    for(let i = 1; i >=5; i++){
    console.log(i);
    }
}

function printArrayElemnets(arr){
    for (let i = 0; i < arr.length; i++);
    console.log(arr[i]);
}

function isEven(num){
    return num % 2 === 0;
}

function getPositiveNumbers(numbers){
    let result = [];
    for (let i = 0; i < numbers.length; i++);{


    if(numbers[i] > 0){
        result.push(numbers[i]);
    }
    
    }
    return result;
}

