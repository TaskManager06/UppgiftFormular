var element = document.getElementById("a");
var width = window.innerWidth;
var height = window.innerHeight;
addEventListener("mousemove", function (event) {
	var yTrig = height * 0.73 - event.clientY;
	var xTrig = width * 0.8 - event.clientX;
	var angle = Math.atan2(yTrig, xTrig);
	var div = document.getElementById("Line");
	div.style.position = "absolute";
	div.style.left = event.clientX + "px";
	div.style.top = event.clientY + "px";
	div.style.width = "50px";
	div.style.height = Math.sqrt(yTrig * yTrig + xTrig * xTrig) + "px";
	div.style.background = "yellow";
	div.style.transform = "rotate(" + "-" + angle + "rad)";
	//div.style.transform = "translate(-100%, -100%)";

	x = event.clientX - 25;
	y = event.clientY + 25;
	element.style.position = "absolute";
	element.style.left = x + "px";
	element.style.top = y + "px";
	/*
	div.style.position = "absolute";
	div.style.left = x + "px";
	div.style.top = y + "px";
	div.style.width = "50px";
	div.style.height = "150px";
	div.style.background = "linear-gradient(black 0px, black 50%, white 50%, white 100%)";
	div.style.animationName = "spin";
	div.style.animationDuration = "1s";
	div.style.animationIterationCount = "infinite";
    */
});
/*
for (let i = 0; i < 2500; i++) {
	const tabDiv = document.createElement("div");
	document.body.appendChild(tabDiv);
	tabDiv.style.position = "absolute";
	tabDiv.style.width = "1px";
	tabDiv.style.height = "1px";
	tabDiv.style.top = i + "px";
	tabDiv.style.left = i + "px";
	tabDiv.style.background = "lightgrey";
	tabDiv.setAttribute("tabIndex", 1);
}

console.log(2342342);
*/
var on = false;
function colorChange() {
	console.log(on);
	if (on) {
		document.getElementById("button").style.background = "green";
		document.getElementById("a").style.background = "black";
		on = false;
	} else {
		const div = document.createElement("div");
		div.setAttribute("id", "Line");
		document.body.appendChild(div);
		document.getElementById("Line").style.zIndex = "114";

		document.getElementById("button").style.background = "red";

		document.getElementById("a").style.background =
			"radial-gradient(rgba(255, 255, 0, 0.3) 0px,rgba(255, 255, 0, 0.3) 100px,black 100px,black 100%)";
		on = true;
	}
	console.log(19293892839);
}
