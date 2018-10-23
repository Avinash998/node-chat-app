var expect = require('expect');
const {generateMessage} = require('./message.js');

describe('generateMessage', () => {

	it('Should generate correct message object', () => {
		const from = 'Avinash';
		const text = 'Hello Avinash';
		const res = generateMessage(from, text);

		expect(res).toInclude({from,text});
		expect(res.createAt).toBeA('number');
		
	});
});
