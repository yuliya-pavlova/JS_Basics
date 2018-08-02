document.body.style.background = prompt('Какой фон будет у страницы?');

const textColor = prompt('Какой цвет текста будет у страницы?');
document.body.setAttribute('text', textColor); 

const textSpan = document.getElementsByClassName('name');
document.querySelector('.name').innerHTML = prompt('Как зовут человека, который вас вдохновляет?');

const risunok = prompt('Введите адрес картинки');
document.querySelector('img').setAttribute('src', risunok);

const textPage = prompt('Введите текст страницы');
document.querySelector('p').innerHTML = textPage;

document.querySelector('p').className += ' animated';
