var outer = document.createElement('div');
document.body.appendChild(outer);

// creates a div element and apends it to the body 

var header = document.createElement("h2");
head.innerText("calculate all the things");
outer.appendChild(header);

// creates h2 with a text and appends it to the header 

calculator = document.createElement("div");
calculator.id = "calculator";
outer.appendChild(calculator);

// creates a div element with an Id 

var button = document.createElement("div");
button.innerText = "1"
calculator.appendChild(button);

// create a button element with a text 