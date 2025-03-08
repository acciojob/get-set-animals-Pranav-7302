//complete this code
class Animal {
    constructor(species){
        this.species = species;
    }
    get Species(){
        return this.species;
    }
    makesound(){
        console.log(`The ${this.species} makes a sound`);
    }
}

class Dog extends Animal {
    bark(){
        console.log(`woof`);
    }
}

class Cat extends Animal {
    purr(){
        console.log(`purr`);
    }
}

// Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;

const myCat = new Cat('Siamese');
myCat.makesound();
myCat.purr();

const myDog = new Dog('Golden Retriever');
myDog.makesound();
myDog.bark();