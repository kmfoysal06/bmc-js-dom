function textWhite(){
	document.getElementById('heading').style.color = 'white';
}
function bgGreen(){
	document.getElementById('canvas').style.background = 'green';
}
function bigText(){
	document.getElementById("heading").style.fontSize = "40px";
}

function btnHover(index){
	button[index].style.background = '#f00';
}

let button = document.getElementsByTagName("button");
button[0].onclick = btnHover(0);
button[1].onclick =  btnHover(1);
button[2].onclick =  btnHover(2);