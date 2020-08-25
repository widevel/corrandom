# corrandom

Generate a unique random string from a number

## Install

```
$ npm install corrandom
```

Example:

```
1000 => 77op
1001 => oopS
1002 => ppsY
1003 => ssSr
```

Usage
```js
const arrayindexoverflow = require('corrandom');
corrandom.setSeed('blue-sky');
console.log('1000 => ' + corrandom.get(1000, 4));
console.log('1001 => ' + corrandom.get(1001, 4));
console.log('1002 => ' + corrandom.get(1002, 4));
console.log('1003 => ' + corrandom.get(1003, 4));
```

If you change the seed the result will change

```js
corrandom.setSeed('arizona');
```
Result:
```
1000 => yyAc
1001 => AAcr
1002 => ccZh
1003 => ZZrB
```

You can also change the character set:
```js
corrandom.setCharset('ABCDEF12345');
```

## API

### setSeed(seed)

Returns null

#### seed

Type: `string`


### get(number, min_length)

Returns the random text string

#### number

Type: `int`

#### min_length
The value cannot be less than the length of the number
Type: `int`



### setCharset(charset)

Returns null

#### charset

Type: `string`