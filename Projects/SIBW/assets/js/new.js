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
    var mm = day.getMonth() + 1; //January is 0!
    var yyyy = day.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
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

function validateEmail(email, idElement) {
    // Compliant to RFC2282
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isMailCorrect = re.test(email), formEmail = document.getElementById(idElement);
    if (!isMailCorrect) formEmail.style.color = "red";
    else formEmail.style.color = "green";
}

function sliderContent(valor){
    var didascalia = document.getElementById("prom-slider-text");
    document.getElementById("promSlider").src = "images/fotos/slider/" + valor + ".jpg";
    switch(valor){
        case 2:
            didascalia.innerHTML = "<h3><strong>DOS NOCHES</strong></h3> Disfute de un 10% de descuento en estancias de un minimo de dos noches.";
            break;
        case 1:
            didascalia.innerHTML = "<h3><strong>10% DE DESCUENTO</strong></h3> Disfute de un 10% de descuento con esta tarifa no reembolsable."
            break;
        case 3:
            didascalia.innerHTML = "<h3><strong>RESERVA ANTICIPADA</strong></h3> Disfute de un 10% de descuento reservando con 21 dias de antelacion.";
            break;
        case 4:
            didascalia.innerHTML = "<h3><strong>HABITACION DOBLE + TREN TURISTICO</strong></h3> Dos noches en habitacion estandar, desayuno continental, dos tickets para uso del Tren Turistico de Granada.";
            break;
        case 5:
            didascalia.innerHTML = "<h3><strong>HABITACION DOBLE + BAÑO ARABE</strong></h3> Dos noches en habitacion estandar, desayuno continental, session de baño arabe en Hamman Al Andalus Granada.";
            break;
        case 6:
            didascalia.innerHTML = "<h3><strong>HABITACION DOBLE + ESPECTACULO DE FLAMENCO</strong></h3> Dos noches en habitacion estandar, desayuno continental, espectaculo de flamenco en \"El templo del Flamenco\".";
            break;
        case 7:
            didascalia.innerHTML = "<h3><strong>HABITACION DOBLE + VISITA GUIADA ALHAMBRA</strong></h3> Dos noches en habitacion estandar, desayuno continental, visita guiada a la Alhambra.";
            break;
        case 8:
            didascalia.innerHTML = "<h3><strong>HABITACION DOBLE + TREN TURISTICO + ESPECTACULO DE FLAMENCO</strong></h3> Disfruta de la oferta por el tren turistico y por el espectaculo de flamenco en un solo pack!.";
            break;
    }
}

function updateSlider(sentido) {
    var numeroProm = 9;
    var imageSrc = document.getElementById("promSlider").src;
    var temp = imageSrc.split("images/fotos/slider/");
    var myValue = parseInt(temp[temp.length-1].split("."));
    if (sentido == "next") {
        myValue = Math.abs(myValue+1) % numeroProm;
        if (myValue == 0) myValue = 1;
    }
    else {
        myValue= Math.abs(myValue-1) % numeroProm;
        if (myValue == 0) myValue = numeroProm-1;
    }
    sliderContent(myValue);
}

window.onload = function(){
    setInterval(updateSlider('next'), 5000);
}