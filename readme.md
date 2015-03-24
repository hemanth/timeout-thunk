# timeout-thunk [![Build Status](https://travis-ci.org/hemanth/timeout-thunk.svg?branch=master)](https://travis-ci.org/hemanth/timeout-thunk)

> setTimeout thunk.


## Install

```
$ npm install --save timeout-thunk
```


## Usage

```js
var timeoutThunk = require('timeout-thunk');

timeoutThunk(7337)(function() { 
  console.log('Meow!');
});

// Logs Meow! after 7337ms.
```


## API

### timeoutThunk -> timeOut -> func

#### timeOut

*Required*  
Type: `Number`

Time in ms.

#### func

Type: `function`  

function to execute.


## License

MIT © [hemanth](http://h3manth.com)
