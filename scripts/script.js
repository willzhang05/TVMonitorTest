var scale = 1.5;
var w = window.innerWidth;
var h = window.innerHeight;
var nagios = '<iframe id="monitor" src="http://monitor.tjhsst.edu"></iframe>';
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
	var d = new Date().toString();
	document.getElementById("time").innerHTML = d.substring(0, d.length - 14);
	t = displayClock();
}
function toggleCardDialog() {
	var dlg = document.getElementById("card-dialog");
	if(dlg.style.display == "none") {
		dlg.style.display = "block";
	} else {
		dlg.style.display = "none";
	}
}

function newModule(s) {
	var parent = document.getElementById("content");
	var mod = document.createElement("div");
	var button = document.getElementById("add-card-wrapper");
	mod.style.backgroundColor = "red";
	mod.style.width = "500px";
	mod.style.height = "500px";
	mod.innerHTML = "TESTING BLOCK";
	mod.style.cssFloat = "left";
	parent.insertBefore(mod, button)
}