const expect = require('expect');
const {Users} = require('./users.js');

describe('Users', () => {

	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Mike',
			room: 'Node Room'
		},{
			id: '2',
			name: 'Jen',
			room: 'React Room'
		},{
			id: '3',
			name: 'Julie',
			room: 'Node Room'
		}];

	});

	it('Should add new user', () => {
		var user = {
			id: '123',
			name: 'Aviansh',
			room: 'The Office Fans'
		};
		var resUser = users.addUser(user.id, user.name, user.room);
		expect(users.users).toInclude(user);

	});

	it('Should remove a user', () => {
		var userId = '1';
		var user = users.removeUser(userId);
		console.log(users);
		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);

	});

	it('Should not remove a user', () => {
		var userId = '99';
		var user = users.removeUser(userId);
		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('Should find user', () => {
		var userId = '2'
		var user = users.getUser(userId);
		expect(user.id).toBe(userId);
	});

	it('Should not find user', () => {
		var userId = '99'
		var user = users.getUser(userId);
		expect(user).toNotExist();
	});

	it('Should return names for Node Room', () => {
		var userList = users.getUserList('Node Room');
		expect(userList).toEqual(['Mike','Julie']);
	});

	it('Should return names for React Room', () => {
		var userList = users.getUserList('React Room');
		expect(userList).toEqual(['Jen']);
	});
});

