const corrandom = require('corrandom');

corrandom.setSeed('arizona');

corrandom.setCharset('ABCDEF12345');

console.log('1000 => ' + corrandom.get(1000, 4));
console.log('1001 => ' + corrandom.get(1001, 4));
console.log('1002 => ' + corrandom.get(1002, 4));
console.log('1003 => ' + corrandom.get(1003, 4));
