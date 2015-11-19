document.getElementByID("add").onclick = function(){
	var text = document.getElementById("todo").value;
	var ul = document.getElementByID("list");
	var listitem = document.getElement("li");
	listitem.innerText = text;
	document.body.appendChild(listitem);
	document.getElementById('todo').value = ""
}