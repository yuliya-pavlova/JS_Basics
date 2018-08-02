console.log('You are at ' + window.location)

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.coolClass.mine');
const firstBySelector = document.querySelector('div');
console.log(allBySelector, firstBySelector);

byId.innerHTML = "<h2>Hello!</h2>";
firstBySelector.innerHTML = "<h2>First Hello</h2>"



