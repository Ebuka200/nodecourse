//Module Wrapper functio


// console.log(__dirname, __filename);

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log(`Hello my name is ${this.name} and i am ${this.age} years old`);
    }

}


module.exports = Person; 
