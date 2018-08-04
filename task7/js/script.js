let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

let d = document.querySelectorAll('.Name');
let p = document.querySelectorAll('p');


for (key in crypto) {
	for (i in crypto[key]) {
		d[key].innerHTML = crypto[key].name;
	}
}

for (key in crypto) {
	for (i in crypto[key]) {
		p[key].innerHTML = crypto[key].price;
	}
}

let bar = document.querySelectorAll('.bar')

for (i = 0; i < bar.length; i++) {
	bar[i].style.width = crypto[i].price + 'px';
	bar[i].style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
}

/*let bitcoin = document.querySelector('.bar1');
let wb = 1388.37;
bitcoin.style.width = wb + 'px';

let ethereum = document.querySelector('.bar2');
let we = 716;
ethereum.style.width = we + 'px';

let litecoin = document.querySelector('.bar3');
let wl = 140;
litecoin.style.width = wl + 'px';*/
