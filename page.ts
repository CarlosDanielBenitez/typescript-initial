function description({ name, age }: { name: string, age: number }) {
    console.log(`Hi ${name}, you are five years old ${age}`);

}
description({ name: "Daniel", age: 24 });

//! tipar arrow function de 2 maneras
const sumar = (a: number, b: number): number => {
    return a + b;
};

const restar: (a: number, b: number) => number = (a, b) => {
    return a - b;
};

//inferencia funciones anonimas segun el contexto

const avengers = ["hulk", "batman", "super man"];
avengers.forEach(element => {
    console.log(element.toUpperCase());

});

// type Alias
type Hero = {
    name: string,
    age: number,
    isActive?: boolean
}
const hulk: Hero = {
    name: "hulk",
    age: 22
}

function createHero(name: string, age: number): Hero {
    return { name, age }
}

const thor = createHero ("Thor", 22);

// optional properties
