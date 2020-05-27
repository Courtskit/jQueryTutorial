//object literal
var userOne = {
  email: 'myemail@gmail.com',
  name: 'Rhia',
  loginFunction() {
    console.log(this.email, ' has logged in');
  },
  logoutFunction() {
    console.log(this.email, ' has logged out');
  }
};

console.log(userOne.name);