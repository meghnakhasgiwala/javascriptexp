// A function that accepts any object with a `quack` method
function makeSound(animal) {
    if (typeof animal.quack === 'function') {
        animal.quack();
    } else {
        console.log("This object doesn't quack!");
    }
}

// Objects with a `quack` method
const duck = {
    quack: function() {
        console.log("Quack!");
    }
};

const person = {
    talk: function() {
        console.log("Hello!");
    }
};

// Using duck typing to make sounds
makeSound(duck); // Outputs: Quack!
makeSound(person); // Outputs: This object doesn't quack!
