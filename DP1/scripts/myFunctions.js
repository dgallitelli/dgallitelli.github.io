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
	if (value1 == null || value1=="" || isNaN(value1))
		return;
	value2 = prompt("Please enter value 2:", "");
	if (value2 == null || value2=="" || isNaN(value2))
		return;
	var sum = parseFloat(value1)+parseFloat(value2);
	var diff = parseFloat(value1)-parseFloat(value2);
	document.getElementById("ex514Text").innerHTML = "Value 1: "+value1+"<br />"
													+"Value 2: "+value2+"<br />"
													+"Sum: "+sum+"<br />"
													+"Diff: "+diff;
}

function ex515(){
	var myValue;
	myValue = prompt("Insert a value:", "");
	if (myValue == null || myValue=="" || !parseInt(myValue))
		return;
	var parsedValue = parseInt(myValue);
	var tableBody = "";
	for (var i = 1; i <= parseInt(myValue); i++){
		tableBody += "<tr><td>"+i+"</td><td>"+i*i+"</td><td>"+i*i*i+"</td></tr>"
	}
	document.getElementById("tableEx515Body").innerHTML = tableBody;
	document.getElementById("tableEx515").style.display = "block";
}

function ex516(){
	alert("Rassegnati. Non lo faccio.");
}

function ex517(){
	var myInput = "", myValues = [], count = 0, myMean = 0.0;
	// acceptinputs until "end" is received
	while (myInput != "end"){
	  myInput = prompt("Insert value "+count+":", "");
		if (myInput != "end" && myInput != "" && !isNaN(myInput)){
			myValues[count] = parseInt(myInput, 10);
			count++;
		}
	}
	// compute arithmetic mean
	if (count == 0)
		myMean = 0;
	else {
		var accumulator = 0;
		for (var i = 0; i < myValues.length; i++)
			accumulator += myValues[i];
		myMean = accumulator / myValues.length;
	}
	// output on the document
	var myList = document.getElementById("listEx517");
	var myHTML = "";
	for (var i = 0; i < myValues.length; i++){
		myHTML += "<li>Value "+i+": "+myValues[i]+"</li>";
	}
	myHTML += "<li>arithmetic mean: "+myMean+"</li>";
	myList.innerHTML = myHTML;
	myList.style.display = "block";
}
