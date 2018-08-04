const form = document.forms[0];
const insert = document.querySelector('.total');

form.onsubmit = function(e) {
	e.preventDefault();
	insert.innerHTML = Math.sin(Math.PI/180*form.elements.angle.value);
}