 // ===================================
// MODULE 00: HELLO WORLD
// Your First JavaScript Program
// ===================================

// 1. Console Messages
console.log("🚀 JavaScript is running!");
console.log("Module: 00 - Hello World");
console.log("Student: Ifeanyi Stanley");

// 2. Basic Variables
let studentName = "Ifeanyi";
let course = "JavaScript Mastery";
let currentModule = 0;

console.log("Student:", studentName);
console.log("Course:", course);
console.log("Module:", currentModule);

// 3. Simple Math
let number1 = 10;
let number2 = 20;
let sum = number1 + number2;

console.log(number1, "+", number2, "=", sum);

// 4. Getting Elements from HTML
let button = document.getElementById("myButton");
let messageElement = document.getElementById("message");

// 5. Button Click Event
button.addEventListener("click", function() {
    messageElement.textContent = "Hello, " + studentName + "! 👋";
    console.log("Button was clicked!");
    
    // Change button text
    button.textContent = "Clicked! ✓";
    
    // Change colors
    messageElement.style.color = "#764ba2";
    
    // After 2 seconds, reset everything
    setTimeout(function() {
        button.textContent = "Click Me Again!";
        messageElement.textContent = "";
    }, 2000);
});

// 6. Page Load Message
console.log("=".repeat(50));
console.log("Page loaded successfully!");
console.log("Ready to learn JavaScript!");
console.log("=".repeat(50));

// 7. Fun fact
let funFact = "JavaScript was created in just 10 days!";
console.log("Fun Fact:", funFact);
