const button = document.querySelector('button');
const popup = document.querySelector('.popup');

//let state = 'none';

button.addEventListener('click', function() {
		popup.style.display = 'flex';
})

const closePopup = document.querySelector('.closePopup');
closePopup.addEventListener('click', function() {
		popup.style.display = 'none';
})

const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');	
openMenu.addEventListener('click', function() {
	menu.style.left = '0';
})

const closeMenu = document.querySelector('.closeMenu');
closeMenu.addEventListener('click', function() {
	menu.style.left = '-50vw';
})


