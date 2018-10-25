const word = ["magic", "joker", "crazy", "flame"];

let randNum = Math.floor(Math.random()* word.length);
let choosenWord = word[randNum];
let rightWord = [];
let underScore= [];
var three = document.getElementById ("three"),
	two = document.getElementById ("two"),
	one = document.getElementById("one");


//
let docUnderScore = document.getElementsByClassName('underscore');
//

let generateUnderscore = () => {
	for(let i = 0; i < choosenWord.length; i++) {
		underScore.push('_');
	}
	return underScore;
}

document.addEventListener ("keypress", (event) =>{
	let keyword = String.fromCharCode(event.keyCode);
	//right guess
	if(choosenWord.indexOf(keyword) > -1) {
		rightWord.push(keyword);
		underScore[choosenWord.indexOf(keyword)] = keyword;
		docUnderScore[0].innerHTML = underScore.join(' ');
		if(underScore.join('') == choosenWord) {
			var winimg = document.getElementById ("win");
			winimg.style.display = 'block';
		}
	}
	//wrong guess
	else {
		three.style.display = 'none';
		two.style.display = 'block';
	}
	// else {
	// 	two.style.display = 'none';
	// 	one.style.display = 'block';
	// }
});

docUnderScore[0].innerHTML = generateUnderscore().join(' ');

//
//    =======================

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
	if (key.keyCode =="65"){
		var img = document.getElementById ("A");
		img.style.display = 'none';
	}
	if (key.keyCode =="66"){
		var img = document.getElementById ("B");
		img.style.display = 'none';
	}
	if (key.keyCode =="67"){
		var img = document.getElementById ("C");
		img.style.display = 'none';
	}
	if (key.keyCode =="68"){
		var img = document.getElementById ("D");
		img.style.display = 'none';
	}
	if (key.keyCode =="69"){
		var img = document.getElementById ("E");
		img.style.display = 'none';
	}
	if (key.keyCode =="70"){
		var img = document.getElementById ("F");
		img.style.display = 'none';
	}
	if (key.keyCode =="71"){
		var img = document.getElementById ("G");
		img.style.display = 'none';
	}
	if (key.keyCode =="72"){
		var img = document.getElementById ("H");
		img.style.display = 'none';
	}
	if (key.keyCode =="73"){
		var img = document.getElementById ("I");
		img.style.display = 'none';
	}
	if (key.keyCode =="74"){
		var img = document.getElementById ("J");
		img.style.display = 'none';
	}
	if (key.keyCode =="75"){
		var img = document.getElementById ("K");
		img.style.display = 'none';
	}
	if (key.keyCode =="76"){
		var img = document.getElementById ("L");
		img.style.display = 'none';
	}
	if (key.keyCode =="77"){
		var img = document.getElementById ("M");
		img.style.display = 'none';
	}
	if (key.keyCode =="78"){
		var img = document.getElementById ("N");
		img.style.display = 'none';
	}
	if (key.keyCode =="79"){
		var img = document.getElementById ("O");
		img.style.display = 'none';
	}
	if (key.keyCode =="80"){
		var img = document.getElementById ("P");
		img.style.display = 'none';
	}
	if (key.keyCode =="81"){
		var img = document.getElementById ("Q");
		img.style.display = 'none';
	}
	if (key.keyCode =="82"){
		var img = document.getElementById ("R");
		img.style.display = 'none';
	}
	if (key.keyCode =="83"){
		var img = document.getElementById ("S");
		img.style.display = 'none';
	}
	if (key.keyCode =="84"){
		var img = document.getElementById ("T");
		img.style.display = 'none';
	}
	if (key.keyCode =="85"){
		var img = document.getElementById ("U");
		img.style.display = 'none';
	}
	if (key.keyCode =="86"){
		var img = document.getElementById ("V");
		img.style.display = 'none';
	}
	if (key.keyCode =="87"){
		var img = document.getElementById ("W");
		img.style.display = 'none';
	}
	if (key.keyCode =="88"){
		var img = document.getElementById ("X");
		img.style.display = 'none';
	}
	if (key.keyCode =="89"){
		var img = document.getElementById ("Y");
		img.style.display = 'none';
	}
	if (key.keyCode =="90"){
		var img = document.getElementById ("Z");
		img.style.display = 'none';
	}
}



















