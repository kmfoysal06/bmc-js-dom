function textWhite(){
	document.getElementById('heading').style.color = 'white';
}
function bgGreen(){
	document.getElementById('canvas').style.background = 'green';
}
function bigText(){
	document.getElementById("heading").style.fontSize = "40px";
}
function alertAction(){
	window.alert('you did it! 😍');
}



let alertBtn = document.getElementById("alertBtn");

alertBtn.onclick = alertAction ;