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
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var drawing; 
var background = new Image();
background.src =
"https://www.wpclipart.com/education/chalkboard/more_boards/white_board.png";

background.onload = function(){
    ctx.drawImage(background,0,0);
};

canvas.onmousedown = function(evt){
	ctx.lineWidth = 3
	ctx.lineJoin = ctx.lineCap = 'round';
	drawing = true;
	ctx.moveTo(evt.offsetX, evt.offsetY);
};

canvas.onmousemove = function(evt) {
  if (drawing) {
    ctx.lineTo(evt.offsetX, evt.offsetY);
    ctx.stroke();
  }
else{
canvas.onmouseup = function() {
drawing = false;
};
}
};

function clearCanvas(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
  	ctx.clearRect(0, 0, canvas.width, canvas.height);
  	ctx.beginPath();
    ctx.drawImage(background,0,0);
}

window.addEventListener("load",init,false);
