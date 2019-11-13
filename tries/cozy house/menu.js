'use strict';

var menuBtn = $('nav > div:first-child');

menuBtn.addEventListener('click', (e) => {
	$('nav').classList.toggle('slide');
});

function $(qs) {
	return document.querySelector(qs);
}