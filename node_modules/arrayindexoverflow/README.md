# arrayindexoverflow

Reset array index in case of overflow


Example...

```js
const arrayindexoverflow = require('arrayindexoverflow');
var array_index = 5;
console.log(arrayindexoverflow(['a','b','c','d','e'], array_index)); //Returs "a"
var array_index = 11;
console.log(arrayindexoverflow(['a','b','c','d','e'], array_index)); //Returs "b"
```