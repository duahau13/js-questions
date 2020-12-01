const list = document.querySelector('ul');
const item = document.querySelectorAll('li');
const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit');

list.addEventListener('click', (e) => {
	console.log(e.target.tagName);
})

// item.forEach((ite) => {
// 	console.log(ite.textContent);
// });

form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('form submitted');
});

const number = Math.random() * 10;
const result = Math.floor(Math.sqrt(number));

console.log(result);