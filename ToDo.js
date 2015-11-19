function addToDoItem(){
	event.preventDefault();
	console.log("hello");
	var itemInList = document.createElement("li");
	var label = document.createElement("label");
	var checkbox = document.createElement("input");
	checkbox.type="checkbox";
	// var form = document.getElementById("item");
	var item = document.getElementById("item");
	var list = document.getElementById("todo-list");
	label.appendChild(checkbox);
	var textNode = document.createTextNode(item.value);
	label.appendChild(textNode);
	itemInList.appendChild(label);
	list.appendChild(li);
	item.value = "";
};


// var form = document.getElementById("the-form");
// var item = document.getElementById("item");
// var list = document.getElementById("todo-list");

var form = document.getElementById("the-form");
form.addEventListener("submit", addToDoItem);