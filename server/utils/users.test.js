const expect = require('expect');

const {Users} = require('./users');


describe('Users', () => {
   var users;

   beforeEach(() => {
      users = new Users();
      users.users = [{
         id: 1,
         name: 'Mike',
         room: 'TestRoom1'
      }, {
         id: 2,
         name: 'Ricky',
         room: 'TestRoom1'
      }, {
         id: 3,
         name: 'Bobby',
         room: 'TestRoom2'
      }]
   });

   it('should add new user', () => {
      var users = new Users();
      var user = {
         id: 123,
         name: 'Colin',
         room: 'The Office Fans'
      };
      var resUser = users.addUser(user.id, user.name, user.room);

      expect(users.users).toEqual([user]);
   });

   it('should remove a user', () => {
      var userId = 2
      var user = users.removeUser(userId);

      expect(user.id).toEqual(userId);
      expect(users.users.length).toBe(2);
   })

   it('should not remove a user', () => {
      var userId = 99;
      var user = users.removeUser(userId);

      expect(user).toNotExist();
      expect(users.users.length).toEqual(3);
   });

   it('should find user', () => {
      var userId = 2;
      var user = users.getUser(userId);

      expect(user.id).toBe(userId);
   });

   it('should not find user', () => {
      var userId = 99;
      var user = users.getUser(userId);

      expect(user).toNotExist();
   });

   it('should return names for TestRoom1', () => {
      var userList = users.getUserList('TestRoom1');

      expect(userList).toEqual(['Mike', 'Ricky']);
   });

   it('should return names for TestRoom2', () => {
      var userList = users.getUserList('TestRoom2');

      expect(userList).toEqual(['Bobby']);
   })
});