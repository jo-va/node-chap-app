const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = 'me@me.com';
		var text = 'This is the text';
		var message = generateMessage(from, text);
		expect(typeof message.createdAt).toBe('number');
		expect(message).toMatchObject({ from, text });
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'me@me.com';
		var lat = 76;
		var lng = 15;
		var url = `https://www.google.com/maps?q=${lat},${lng}`;
		var message = generateLocationMessage(from, lat, lng);
		expect(typeof message.createdAt).toBe('number');
		expect(message).toMatchObject({ from, url });
	});
});