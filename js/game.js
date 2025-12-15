var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
var record = 0;

document.getElementById("start").addEventListener("click", blockAnimate);

function blockAnimate(){
	if (block.classList != "blockAnimate") {
		block.classList.add("blockAnimate");
		document.getElementById("again").disabled = true;
		document.getElementById("start").disabled = true;
	}

	scores = setInterval(scoring, 100);

}

function scoring(){
	score = score+1;
	document.getElementById("score").innerText = score;
}

document.getElementById("game").addEventListener("click", jump);

function jump(){
	if(character.classList != "animate"){
		character.classList.add("animate");
	}

	setTimeout(function(){
		character.classList.remove("animate");
	}, 500)
}

 var checkDead = setInterval(function(){
 	var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
 	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

 	if((blockLeft < 90 && blockLeft > 0) && (characterTop >= 125)){
 		// block.style.animation = "none";
		block.classList.remove("blockAnimate");
		document.getElementById("again").disabled = false;
		document.getElementById("over").style.display = "block";

 		// block.style.display = "none";
 		clearInterval(scores);
 		document.getElementById("again").addEventListener("click", function(){
			if (record<=score) {
				record = score;
				document.getElementById("record").innerText = record;
				score = 0;
				document.getElementById("score").innerText = score;
			} else{
				score = 0;
				document.getElementById("score").innerText = score;
			}
			document.getElementById("start").disabled = false;
			document.getElementById("over").style.display = "none";

			// character.classList.remove("animate");
			

			// alert("Want to play again");
		})
 		// window.alert("You Loose!!!");
 	}
 })

