let age = 16;
let message = age >= 18 || age >= 16 ? "Access Granted" : "Access Denied";
console.log(message);


let isAdult = true;
let hasTicket = true;

if(isAdult && hasTicket) {
    console.log("You can enter.");
}

let isMember = false;
let hasCoupon = true;

if(isMember || hasCoupon){
    console.log("You get a discount!!!");
}

let isRaining = false;

if(!isRaining){
    console.log("You can go outside!!!");
}

function alert(alert) {
    console.log("Hello World!")
}

let score = 79;

if (score >= 80){
    console.log("YOU DID GREAT");
} else if (score === 70){
    console.log("You have passed");
} else {
    console.log("You alright ??");
}