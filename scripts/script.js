"use strict";
var scale = 1.5,
	w = window.innerWidth,
	h = window.innerHeight,
	dia = false,
	exp = false,
	tempW, tempH, tempM;
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
function displayClock(){var time = setTimeout("displayTime()", 1000)}
function displayTime() {
	document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
	var t = displayClock();
}
function toggleCardDialog() {
	var dlg = document.getElementById("card-dialog");
	if(dia) {
		dlg.style.opacity = "0";
		dlg.style.display = "none";
		dia = false;
	} else {
		dlg.style.opacity = "1";
		dlg.style.display = "block";
		dia = true;	
	}
}
function toggleModExpand(card, expand) {
	if(exp) {
		card.style.width = tempW;
		card.style.height = tempH;
		card.style.margin = tempM;
		expand.style.backgroundImage = "url('icons/ic_expand_less_black_48px.svg')";
		exp = false;
	} else {
		tempW = card.style.width;
		tempH = card.style.height;
		tempM = card.style.margin;
		card.style.width = "70%";
		card.style.height = "100%";
		card.style.margin = "-0.25px";
		expand.style.backgroundImage = "url('icons/ic_expand_more_black_48px.svg')";
		exp = true;
	}
}
var Module = class {
	constructor(s) {
		var parent = document.getElementById("content"),
		modWrap = document.createElement("div"),
		mod = document.createElement("div"),
		bar = document.createElement("div"),
		label = document.createElement("div"),
		expand = document.createElement("button"),
		exit = document.createElement("button"),
		button = document.getElementById("add-card-wrapper");
		modWrap.className = s + " card";
		mod.className = s.substring(0, s.length - 8);
		bar.className = "window-bar";
		label.className = "window-label";
		expand.className = "expand-button";
		exit.className = "exit-button";
		exit.onclick = function() {modWrap.remove()};
		if(s = "nagios") {
			var frame = document.createElement("iframe");
			frame.id = "monitor";
			frame.src = "https://monitor.tjhsst.edu";
			frame.width = 720;
			frame.height = 720;
			mod.appendChild(frame);
			bar.style.backgroundColor = "#2196F3";
			expand.onclick = function() {toggleModExpand(modWrap, expand)};
		}
		modWrap.appendChild(bar);
		label.appendChild(expand);
		bar.appendChild(label);
		bar.appendChild(exit);
		modWrap.appendChild(mod);
		parent.insertBefore(modWrap, button);
	}
}