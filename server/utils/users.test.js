const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Mike',
			room: 'Node'
		}, {
			id: '2',
			name: 'Jo',
			room: 'React'
		}, {
			id: '3',
			name: 'Eric',
			room: 'Node'
		}];
	});

	it('should add new user', () => {
		var user = users.users[0];
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users.length).toBe(4);
		expect(resUser).toMatchObject(user);
	});

	it('should return names for node course', () => {
		var userList = users.getUserList('Node');
		expect(userList).toEqual([ users.users[0].name, users.users[2].name ]);
	});

	it('should return names for react course', () => {
		var userList = users.getUserList('React');
		expect(userList).toEqual([ users.users[1].name ]);
	});

	it('should remove a user', () => {
		var expectedUser = users.users[1];
		var user = users.removeUser('2');
		expect(users.users.length).toBe(2);
		expect(user).toMatchObject(expectedUser);
	});

	it('should not remove user', () => {
		var user = users.removeUser('4');
		expect(users.users.length).toBe(3);
		expect(user).toBeFalsy();
	});

	it('should find user', () => {
		var user = users.getUser('2');
		expect(user).toMatchObject(users.users[1]);
	});

	it('should not find user', () => {
		var user = users.getUser('4');
		expect(user).toBeFalsy();
	});
});