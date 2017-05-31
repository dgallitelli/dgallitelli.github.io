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
