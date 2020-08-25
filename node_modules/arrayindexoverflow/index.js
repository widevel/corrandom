'use strict';

function get(arr, index) {
	if((index + 1) > arr.length) return get(arr, index - arr.length);
	
	return arr[index];
}

module.exports = get;