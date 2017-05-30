window.onload = function(){
	document.getElementById("loadingText").innerHTML="The page is loaded. Wait 2 secs."
    setTimeout(changeLoader, 2000);
}

function changeLoader(){
	document.getElementById("js_loading_sec").style.display = "none";
	document.getElementById("js_loaded_sec").style.display = "block";
	alert("Page loaded.");
}

function evenOrOdd(){
    var output;
    var myInput = prompt("Please enter a value:", "");
    if (myInput == null || myInput == "") {
        output = "User cancelled the prompt.";
    } else {
		output = "The inserted value "+myInput+" is ";
		var odd = myInput % 2;
		if (odd == 1)
        	output += "odd.";
		else
			output += "even.";
    }
    document.getElementById("valueEvenOrOddText").innerHTML = output;
}

function ex513(){
	var value1, value2;
	value1 = prompt("Please enter value 1:", "");
	if (value1 == null || value1=="")
		return;
	value2 = prompt("Please enter value 2:", "");
	if (value2 == null || value2=="")
		return;
	var sum = parseFloat(value1)+parseFloat(value2);
	var diff = parseFloat(value1)-parseFloat(value2);
	alert("Sum of the inserted numbers: "+sum);
	alert("Difference of the inserted numbers: "+diff);
}

function ex514(){
	var value1, value2;
	value1 = prompt("Please enter value 1:", "");
	if (value1 == null || value1=="")
		return;
	value2 = prompt("Please enter value 2:", "");
	if (value2 == null || value2=="")
		return;
	var sum = parseFloat(value1)+parseFloat(value2);
	var diff = parseFloat(value1)-parseFloat(value2);
	document.getElementById("ex514Text").innerHTML = "Value 1: "+value1+"<br />"
													+"Value 2: "+value2+"<br />"
													+"Sum: "+sum+"<br />"
													+"Diff: "+diff;
}
