function myFoo() {
    alert("Function not implemented yet. Sorry for the trouble.");
}

function changeZoomPicture(newPic) {
    document.getElementById("zoom-pic").src = "images/fotos/" + newPic;
}

function highlightBG(paramId) {
    document.getElementById(paramId).style.background = "#000";
}

function today() {
    var day = new Date();
    var dd = day.getDate();
    var mm = day.getMonth()+1; //January is 0!
    var yyyy = day.getFullYear();

    if(dd<10) {
        dd='0'+dd;
    } 

    if(mm < 10) {
        mm='0'+mm;
    } 

    day = yyyy+'-'+mm+'-'+dd;
    document.getElementById("input-llegada").min=day;
}

function showPrice(paramId) {
    var dom = document.getElementById(paramId);
    if (dom.style.display == "inline")
        dom.style.display = "none";
    else dom.style.display = "inline";
}

function updateReserva(paramId2){
    var select = document.getElementById('habitacion-select');
    var option, i=0;

    for (i=0; i<select.options.length; i++) {
        option = select.options[i];

        if (option.id == paramId2) {
         option.selected = true;
         return;
      } 
    }
}