//chatgpt example of factory function
/* it is an fun that returns objects . it is way of creating multiple instance of similar objects without using classes or constructors*/
function createPerson(name, age) {
    return {
      name: name,
      age: age,
      greet: function() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
      }
    };
  }
  
  const person1 = createPerson("Alice", 30);
  const person2 = createPerson("Bob", 25);
  
  person1.greet(); // Output: Hello, my name is Alice and I'm 30 years old.
  person2.greet(); // Output: Hello, my name is Bob and I'm 25 years old.