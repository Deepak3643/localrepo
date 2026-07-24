console.log("Hello World");
console.log("This is a sample code snippet from LocalRepo/index.js");

const btn = document.getElementById("prompt-btn");
    const output = document.getElementById("output");
    btn.addEventListener("click", () => {
      const userName = window.prompt("What is your name?", "");
      output.textContent = "Hello, " + userName + "!";
    });

