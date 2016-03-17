function myFoo() {
    alert("Function not implemented yet. Sorry for the trouble.");
}

function changeZoomPicture(newPic) {
    document.getElementById("zoom-pic").src = "images/fotos/" + newPic;
}

function highlightBG(paramId) {
    document.getElementById(paramId).css.background = "#000";
}

function today() {
    var day = new Date();
    var dd = day.getDate();
    var mm = day.getMonth()+1; //January is 0!
    var yyyy = day.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm < 10) {
        mm='0'+mm
    } 

    day = yyyy+'-'+mm+'-'+dd;
    document.getElementById("input-llegada").min=day;
}