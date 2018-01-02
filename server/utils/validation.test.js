const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		expect(isRealString(98)).toBeFalsy();
	});

	it('should reject string with only spaces', () => {
		expect(isRealString('     ')).toBeFalsy();
	});

	it('should allow string with non-space characters', () => {
		expect(isRealString('   this is a string    ')).toBeTruthy();
	});
});