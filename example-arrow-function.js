var names = ['Saurav', 'Chinese', 'John', 'Doe'];

names.forEach(function(name){
  console.log('forEach ', name);
});

names.forEach((name) => {
  console.log('arrowFunc ', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Saurav'));

// Different between arrow function and anonymous function
// var person = {
//   name: "Saurav",
//   greet: function () {
//     names.forEach(function (name) {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
// person.greet();
var person = {
  name: "Saurav",
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}
person.greet();

// Challenge area
var addStatement = (a, b) => {
  return (a + b);
}
var addExpression = (a, b) => (a + b);

console.log(addStatement(5, 1));
console.log(addExpression(6, 2));
