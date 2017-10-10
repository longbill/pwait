const wait = require('./index.js');
const assert = require('assert');

async function foo() {
	let a = Date.now();
	console.log(a);
	await wait(1000);
	let b = Date.now();
	console.log(b);
	assert.ok(b - a >= 1000);
}

foo();

wait(1000).then(()=>{
	console.log('after 1s');
}).then(()=>wait(1000)).then(()=>{
	console.log('another 1s');
});