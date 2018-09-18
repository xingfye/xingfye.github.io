// var Word1 = ['my sister', 'flying Jet', 'rice', ]
// 	secondWord = []

// var randomWord + Math.floor( Math.random() * firstWord.length);

// console.log(firstWord.[randomWord]);

// console.log(document.getElementById("word1"))

// document.getElementById("word1").innerHTML = ["asdhbasd", "mys sister", "flying jet", "rice"]

// document.getElementById("word1").innerHTML = "word1"
var w1 = ["sister", "flying jet", "rice"],
	w2 = ["park", "playground", "backyard", "school"],
	w3 = ["alien", "Superman", "Spongebob"], 
	w4 = ["sky", "water", "middle of air"],
	w5 = ["people", "children"],
	w6 = ["my sister", "flying jet", "rice"],
	w7 = ["defeat", "Kissed", "knocked down by"];

var rand1 = w1[Math.floor(Math.random() * w1.length)],
	rand2 = w2[Math.floor(Math.random() * w2.length)],
	rand3 = w3[Math.floor(Math.random() * w3.length)],
	rand4 = w4[Math.floor(Math.random() * w4.length)],
	rand5 = w5[Math.floor(Math.random() * w5.length)],
	rand6 = w6[Math.floor(Math.random() * w6.length)],
	rand7 = w7[Math.floor(Math.random() * w7.length)];

function showquote(){
   document.getElementById('word1').innerHTML = rand1,
   document.getElementById('word2').innerHTML = rand2,
   document.getElementById('word3').innerHTML = rand3,
   document.getElementById('word4').innerHTML = rand4,
   document.getElementById('word5').innerHTML = rand5,
   document.getElementById('word6').innerHTML = rand6,
   document.getElementById('word7').innerHTML = rand7;
}
showquote();
// console.log()
// Math.floor( Math.random() * word1.length)

