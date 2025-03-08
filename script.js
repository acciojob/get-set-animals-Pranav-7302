//complete this code
class Animal {
    constructor(species){
        this.species = species;
    }
    get Species(){
        return this.species;
    }
    makeSound(){
        console.log(`The ${this.species} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(species){
        super(species);
    }
    bark(){
        console.log(`woof`);
    }
}

class Cat extends Animal {
    constructor(species){
        super(species);
    }
    purr(){
        console.log(`purr`);
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

const myCat = new Cat('Siamese');
myCat.makeSound();
myCat.purr();

const myDog = new Dog('Golden Retriever');
myDog.makeSound();
myDog.bark();