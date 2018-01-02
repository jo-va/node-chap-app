const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = 'me@me.com';
		var text = 'This is the text';
		var message = generateMessage(from, text);
		expect(typeof message.createdAt).toBe('number');
		expect(message).toMatchObject({ from, text });
	});
});