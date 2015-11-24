document.getElementById("add").onclick = function(){
	var text = document.getElementById("todo").value;
	var a = document.getElementById("list");
	var listitem = document.createElement("li");
	listitem.innerText = text;
	document.body.appendChild(listitem);
	document.getElementById('todo').value = ""
}