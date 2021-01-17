import products from './products/_products.js';

const contents = JSON.stringify(products.filter(p => p.featured));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}