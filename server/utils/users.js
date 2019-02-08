[{
   id:'asdf',
   name: 'Colin',
   room: 'The Office Fans'
}]

// addUser(id, name, room);
// removeUser(id);
// getUser(id);
// getUserList(room)

class Users {
   constructor () {
      this.users = [];
   }
   addUser (id, name, room) {
      var user = {id, name, room};
      this.users.push(user);
      return user;
   }
   removeUser (id) {
      var user = this.getUser(id);

      if (user) {
         this.users = this.users.filter((user) => user.id !== id);
      }

      return user;
   }
   getUser (id) {
      return this.users.filter((user) => user.id === id)[0];
   }
   getUserList (room) {
      var users = this.users.filter((user) => user.room === room);
      var namesArray = users.map((user) => user.name);

      return namesArray;
   }
}

var users = new Users();
var me = users.addUser(1,'Colin','test');
users.addUser(2,'Mike','test');
console.log(users.users);
console.log(users.removeUser(3));
console.log(users.users);
var findUser = users.getUser(2);
console.log('found user:   ', findUser);

module.exports = {Users};

// class Person {
//    constructor (name, age) {
//       this.name = name;
//       this.age = age;
//    }
//    getUserDescription () {
//       return `${this.name} is ${this.age} years old.`;
//    }
// }

// var me = new Person('Colin', 29);

// console.log(me.getUserDescription());