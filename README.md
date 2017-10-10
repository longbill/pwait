# Install

`npm i --save pwait`

# Usage

async/await:

```javascript
const wait = require('pwait');
async function doSomething() {
	//...
	await wait(1000); //wait 1000ms and do nothing
	//...
}
```

Promise:

```javascript
const wait = require('pwait');
wait(1000).then(()=>{
	console.log('after 1s');
}).then(()=>wait(1000)).then(()=>{
	console.log('another 1s');
});
```