window.onload = function(){
	document.getElementById("loadingText").innerHTML="The page is loaded. Wait 5 secs."
    setTimeout(changeLoader, 5000);
}

function changeLoader(){
	document.getElementById("js_loading_sec").style.display = "none";
	document.getElementById("js_loaded_sec").style.display = "block";
	alert("Page loaded.");
}
