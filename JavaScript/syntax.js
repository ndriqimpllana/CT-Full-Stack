/**
 * script.js
 * This file contains JavaScript functions to simulate interactive features for the website.
 * These functions are independent and not directly connected to the HTML elements in this example.
 */

/**
 * Function to validate an email address format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the email is valid, false otherwise.
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Function to simulate displaying user projects.
 * In a real application, this might fetch data from an API.
 * @param {Array<Object>} projects - An array of project objects. Each object should have a 'name' and 'description'.
 * @returns {Array<string>} - An array of formatted project strings.
 */
function showProjects(projects) {
    if (!Array.isArray(projects) || projects.length === 0) {
        return ["No projects to display."];
    }

    let projectList = [];
    projects.forEach(project => {
        if (typeof project.name === 'string' && typeof project.description === 'string') {
            projectList.push(`Project: ${project.name} - Description: ${project.description}`);
        } else {
            projectList.push("Invalid project data found.");
        }
    });
    return projectList;
}

/**
 * Function to calculate the total price of items in a shopping cart.
 * @param {Array<Object>} items - An array of item objects. Each object should have a 'price' and 'quantity'.
 * @returns {number} - The total price.
 */
function calculateTotalPrice(items) {
    if (!Array.isArray(items) || items.length === 0) {
        return 0;
    }

    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (typeof item.price === 'number' && item.price > 0 && typeof item.quantity === 'number' && item.quantity >= 0) {
            totalPrice += item.price * item.quantity;
        } else {
            console.warn("Invalid item data encountered:", item);
        }
    }
    return totalPrice;
}

/**
 * Function to generate a personalized greeting message.
 * @param {string} userName - The name of the user.
 * @param {string} [timeOfDay='morning'] - The time of day (e.g., 'morning', 'afternoon', 'evening').
 * @returns {string} - The personalized greeting.
 */
function getGreetingMessage(userName, timeOfDay = 'morning') {
    userName = userName.trim(); // Clean up leading/trailing spaces
    if (userName === "") {
        return "Hello there!";
    }
    let greeting = "";
    switch (timeOfDay.toLowerCase()) {
        case 'morning':
            greeting = `Good morning, ${userName}!`;
            break;
        case 'afternoon':
            greeting = `Good afternoon, ${userName}!`;
            break;
        case 'evening':
            greeting = `Good evening, ${userName}!`;
            break;
        default:
            greeting = `Hello, ${userName}!`;
            break;
    }
    return greeting;
}

/**
 * Function to filter products based on a minimum price.
 * @param {Array<Object>} products - An array of product objects, each with a 'name' and 'price'.
 * @param {number} minPrice - The minimum price to filter by.
 * @returns {Array<Object>} - An array of products that meet the minimum price criteria.
 */
function filterProductsByMinPrice(products, minPrice) {
    if (!Array.isArray(products) || products.length === 0 || typeof minPrice !== 'number' || minPrice < 0) {
        return [];
    }

    const filtered = products.filter(product => {
        return typeof product.price === 'number' && product.price >= minPrice;
    });
    return filtered;
}


// --- Example Usage (for demonstration purposes, not directly connected to HTML) ---

console.log("--- Email Validation ---");
console.log("test@example.com is valid:", validateEmail("test@example.com")); // true
console.log("invalid-email is valid:", validateEmail("invalid-email"));     // false
console.log("another.test@sub.domain.co is valid:", validateEmail("another.test@sub.domain.co")); // true

console.log("\n--- Showing Projects ---");
const myProjects = [
    { name: "Website Redesign", description: "Modernizing our corporate website." },
    { name: "Mobile App Development", description: "Building a new cross-platform mobile application." },
    { name: "Data Analytics Dashboard", description: "Creating interactive dashboards for data visualization." }
];
const formattedProjects = showProjects(myProjects);
formattedProjects.forEach(proj => console.log(proj));

console.log("\n--- Calculating Total Price ---");
const cartItems = [
    { name: "Laptop", price: 1200, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1.5 } // Example of invalid quantity handled
];
console.log("Total price:", calculateTotalPrice(cartItems)); // Expected: 1325 (1200*1 + 25*2 + 75*1)

console.log("\n--- Greeting Messages ---");
console.log(getGreetingMessage("Alice"));            // Good morning, Alice!
console.log(getGreetingMessage("Bob", "afternoon")); // Good afternoon, Bob!
console.log(getGreetingMessage("Charlie", "evening")); // Good evening, Charlie!
console.log(getGreetingMessage(""));                // Hello there!
console.log(getGreetingMessage("David", "night"));  // Hello, David!

console.log("\n--- Filtering Products by Price ---");
const availableProducts = [
    { name: "Basic Widget", price: 10 },
    { name: "Premium Gadget", price: 50 },
    { name: "Standard Tool", price: 25 },
    { name: "Economy Item", price: 5 }
];
const affordableProducts = filterProductsByMinPrice(availableProducts, 20);
console.log("Products >= $20:", affordableProducts.map(p => p.name)); // Premium Gadget, Standard Tool
const veryExpensiveProducts = filterProductsByMinPrice(availableProducts, 100);
console.log("Products >= $100:", veryExpensiveProducts.map(p => p.name)); // (empty array)