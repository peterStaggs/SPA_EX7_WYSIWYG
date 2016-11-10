"use strict"

var MyApp = (function(myApp){
	return myApp;
})(MyApp || {}); 

let myarray = MyApp.getMainArray(); 
let output = document.getElementById("output");
let input = document.getElementById("input");

//if you want a variable in your literal, use ${} 

myarray.forEach(function(currentvalue, index) {
	let cardDiv = document.createElement("div"); 

	let literal = 
	`<div id="cards${index}" div class=cards>
	<h3>${currentvalue.title}</h3>
	<h4>${currentvalue.name}</h4>
	<p id="bio">${currentvalue.bio}</p>
	<p><img src='${currentvalue.image}'</p>
	<p>${currentvalue.lifespan.birth}</p>
	<p>${currentvalue.lifespan.death}</p>
	</div>`;
	cardDiv.innerHTML = literal;
	output.appendChild(cardDiv);
	console.log(document.getElementById(`bio`));

	document.getElementById(`cards${index}`).addEventListener("click", function() {
		document.getElementById(`cards${index}`).classList.toggle("clicker");
		document.getElementById("input").focus();
		edit();
	});

	function edit () {
		input.addEventListener('keyup', function () {
		document.getElementById(`bio`).innerHTML = document.getElementById("input").value;
		})
	}
});

document.getElementById("input").addEventListener("keydown", function(btn) {
	if (btn.keyCode == 13 && document.getElementById("input").value !== "") {
		document.getElementById("input").value = "";
	}
});


	

		

	




 


