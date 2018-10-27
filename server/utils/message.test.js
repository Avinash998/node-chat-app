var expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {

	it('Should generate correct message object', () => {
		const from = 'Avinash';
		const text = 'Hello Avinash';
		const res = generateMessage(from, text);

		expect(res).toInclude({from,text});
		expect(res.createAt).toBeA('number');
		
	});
});

describe('generateLocationMessage', () => {
	it('Should Generate correct location object', () => {
		const from = 'Avinash';
		const latitude = 34.33045;
		const longitude = 45.2342;
		const res = generateLocationMessage(from, latitude, longitude);

		expect(res).toInclude({from , url: `https://www.google.com/maps?q=${latitude},${longitude}`});
		expect(res.createAt).toBeA('number');
	});
});