let age = 30;
let hasVIPPass = false;

if (age < 5) {
    console.log("Free Entry!");
} else if (age >= 5 && age <= 12) {
    console.log("Child ticket: $10");
} else if (age >= 13 && age <= 64) {
    console.log("Adult Ticket: $20");
} else {
    console.log("Senior Ticket: $15");
}

if (hasVIPPass) {
    console.log("VIP Access Granted");
}

age = 12 
console.log(age);

hasVIPPass = true;
console.log(hasVIPPass);



let isAdult = true;
let hasTicket = true;


if (isAdult && hasTicket) {
    console.log("You can enter.");
}
