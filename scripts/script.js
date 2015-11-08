var scale = 1.5,
	w = window.innerWidth,
	h = window.innerHeight;
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
	document.getElementById("time").innerHTML = d.substring(0, d.length - 33);
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
	var parent = document.getElementById("content"),
		modWrap = document.createElement("div"),
		mod = document.createElement("div"),
		exit = document.createElement("button"),
		button = document.getElementById("add-card-wrapper");
	modWrap.className = s + " card";
	mod.className = s.substring(0, s.length - 8);
	exit.innerHTML = "X";
	exit.className = "exit-button";
	exit.onclick = function() {modWrap.remove()};
	if(s = "nagios") {
		frame = document.createElement("iframe");
		frame.id = "monitor";
		frame.src = "https://monitor.tjhsst.edu";
		frame.width = 720;
		frame.height = 720;
		mod.appendChild(frame);
	}
	modWrap.appendChild(exit);
	modWrap.appendChild(mod);
	parent.insertBefore(modWrap, button);
}