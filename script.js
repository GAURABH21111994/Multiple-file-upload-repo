// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is successfully connected!");
    
    // Example: Change text of an element if it exists
    const heading = document.querySelector("h1");
    if (heading) {
        heading.textContent = "Hello from script.js!";
    }
});
