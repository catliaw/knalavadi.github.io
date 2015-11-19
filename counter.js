var myDiv = getElementById("myDiv");
var myBtn = document.createElement("Button");
myBtn.innerHTML = "Increment";
count = Count();
myBtn.addEventListener("Count");
var result = document.createElement("input");
result.type = "Text"
myDiv.appendChild(myBtn);
myDiv.appendChild(result);

function Count(){
	var counter = 0 
	function InnerCount(){
		count += 1;
		result.value = counter;
	}
	return InnerCount;

}