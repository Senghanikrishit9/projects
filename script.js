// Fecthing the json file in js file !

fetch("./movie.json")
.then((response) => response.json())
.then((data) => console.log(data));

// Fecthing the text file in js file !

fetch("./text.txt")
.then((response) => response.text())
.then((data) => console.log(data));

// fetching the API

fetch('https://api.github.com/users')
.then((response) => response.json())
.then((data) => console.log(data));