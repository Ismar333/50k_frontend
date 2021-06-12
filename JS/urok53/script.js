(function () {
	'use strict';

	fetch("http://localhost:3000/products")
	.then(data => data.json())
	.then(res => console.log(res));
	
}());