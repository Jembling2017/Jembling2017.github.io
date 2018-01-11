// JavaScript Document
var muted = 0;
function init(){
	console.log("init fired");
	muted = localStorage.getItem("Muted");
		if(muted == 1){
		document.getElementById("Background").volume = 0.0;
	}
}
function mute(){
	if(muted == 0){
	document.getElementById("Background").volume = 0.0;
		muted = 1;
		localStorage.setItem("Muted", muted);
	}
	else{
	document.getElementById("Background").volume = 1;
		muted = 0;
		localStorage.setItem("Muted", muted);
	}
}

window.addEventListener("load",init,false);
