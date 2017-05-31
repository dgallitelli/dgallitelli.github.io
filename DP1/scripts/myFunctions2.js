function ex521(){
  var myText = document.getElementById("textEx521").value;
  alert(myText.toLowerCase());
}

function ex522(color){
  document.body.style.backgroundColor = color;
}

function ex523(){
  var value1 = document.getElementById("ex523value1").value;
  var value2 = document.getElementById("ex523value2").value;
  var sum = parseInt(value1) + parseInt(value2);
  document.getElementById("ex523result").innerHTML = "The sum value is: "+sum;
  document.getElementById("ex523result").style.display = "block";
}

function checkPositiveInt(myID){
  var myElement = document.getElementById(myID);
  var insValue = parseInt(myElement.value, 10);
  if (isNaN(insValue) || insValue < 0){
    alert("Incorrect value inserted: inserted a positive integer.");
    myElement.focus();
  }
}

function clearValue(myID){
  var myElement = document.getElementById(myID);
  myElement.value = 0;
}

function checkPositiveInt2(myID){
  var myElement = document.getElementById(myID);
  var insValue = parseInt(myElement.value, 10);
  if (isNaN(insValue) || insValue < 0){
    alert("Incorrect value inserted: inserted a positive integer.");
    myElement.focus();
  } else {
    ex524();
  }
}

function ex524(){
  var value1 = document.getElementById("ex524value1").value;
  var value2 = document.getElementById("ex524value2").value;
  var sum = parseInt(value1) + parseInt(value2);
  document.getElementById("ex524result").innerHTML = "The sum value is: "+sum;
}

function ex525(){
  var year = document.getElementById("ex525year").value;
  year = parseInt(year, 10);
  if (year < 0 || isNaN(year))
    return;
  var christmas = new Date(year, 11, 25);
  switch (christmas.getDay()) {
    case 1:
      christmas = "Monday";
      break;
    case 2:
      christmas = "Tuesday";
      break;
    case 3:
      christmas = "Wednesday";
      break;
    case 4:
      christmas = "Thursday";
      break;
    case 5:
      christmas = "Friday";
      break;
    case 6:
      christmas = "Saturday";
      break;
    case 0:
      christmas = "Sunday";
      break;
    default:
      alert("Something went terribly wrong!");
      return;
  }
  var myPDay = document.getElementById("christmasDay")
  myPDay.innerHTML = "Christmas day will be on "+christmas;
  myPDay.style.display = "block";
}

function greatest(myID){
  // Compute how many children of type textarea are in the form (#children - 1 [button])
  var numberOfExtraElements = 3;
  var brokenValue = false, valuesFromForm = [], count = 0;
  // Check if all of them have proper values
  var myChild = document.getElementById(myID).children;
  for (var i = 0; i < myChild.length-numberOfExtraElements; i++){
    var value = parseInt(myChild.item(i).value,10);
    // alert("Reading value = "+value+" element = "+i);
    if (isNaN(value)){
      alert("Incorrent value entered. Please fix it.");
      clearValue(myChild.item(i).getAttribute("id"));
      myChild.item(i).focus();
      brokenValue = true;
      break;
    } else {
      valuesFromForm[count] = value;
      count++;
    }
  }
  if (brokenValue == true)
    return;
  // Here if all children have proper values. Look for the greatest!
  var maxValue = 0;
  for (var i = 0; i < valuesFromForm.length; i++){
    if (valuesFromForm[i] > maxValue)
      maxValue = valuesFromForm[i];
  }
  // Print it!
  var myString = "The greatest number of them all is: "+maxValue;
  alert(myString);
}

function cleanForm(myID){
  var numberOfExtraElements = 3;
  var myChild = document.getElementById(myID).children;
  for (var i = 0; i < myChild.length-numberOfExtraElements; i++){
    clearValue(myChild.item(i).getAttribute("id"));
  }
}
