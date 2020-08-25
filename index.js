const shuffleSeed = require('shuffle-seed');

const zeroFill = require('zero-fill');

const arrayindexoverflow = require('arrayindexoverflow');
	
var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');

var seed;

var shuffledCharset = charset;

module.exports.get = function(number, min_length) {
	
	var positions;
	
	if(min_length === null) {
		positions = number.toString().split('');
	} else {
		positions = zeroFill(min_length, number).split('');
	}
	
	const random_str = [];
	
	positions.forEach(function(i,k) {
		random_str.push(arrayindexoverflow(shuffledCharset, number + parseInt(i) + k));
	});
	
	return random_str.join('');
}

module.exports.setCharset = function(c) {
	charset = c.split('');
	module.exports.setSeed();
}

module.exports.setSeed = function(s = null) {
	if(s !== null) seed = s;
	if(seed !== null) shuffledCharset = shuffleSeed.shuffle(charset,seed);
}