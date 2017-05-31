function ex521(){
  var myText = document.getElementById("textEx521").value;
  alert(myText.toLowerCase());
}

function ex522(color){
  document.body.style.backgroundColor = color;
}

function ex523(){

}

function checkPositiveInt(myID){
  var myElement = document.getElementById(myID);
  var insValue = parseInt(myElement.value, 10);
  if (isNaN(insValue) || insValue < 0){
    alert("Incorrect value inserted: inserted a positive integer.");
    myElement.focus();
  }
}
