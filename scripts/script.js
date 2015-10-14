var scale = 1.5;
var w = window.innerWidth;
var h = window.innerHeight;
setScale();
displayClock();
window.onresize = function() {
	w = window.innerWidth;
	h = window.innerHeight;
	console.log(w);
	setScale();
}
function setScale() {
	var element = document.getElementById('schedule'),
		style = window.getComputedStyle(element),
		top = style.getPropertyValue('-webkit-transform');
	console.log(top);
	scale =  w * (1.5/1280);
	console.log(scale);
	element.style["-webkit-transform"] = "scale(" + scale + ")";
	element.style["-moz-transform"] = "scale(" + scale + ")";
	element.style["-o-transform"] = "scale(" + scale + ")";
	element.style["-ms-zoom"] = scale + "";
	scale = 1280 / (1.49 * w);
	element.style.width =  (scale * 100) + "%";
}
function displayClock(){time = setTimeout("displayTime()", 1000)}
function displayTime() {
	var d = new Date();
	document.getElementById("time").innerHTML = "The current time is: " + d;
	t = displayClock();
}