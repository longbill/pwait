# Install

`npm i --save pwait`

# Usage

```javascript
const wait = require('pwait');
async function doSomething() {
	...
	await wait(1000); //wait 1000ms and do nothing
	...
}
```