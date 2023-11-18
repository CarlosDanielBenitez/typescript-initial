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

// type Alias     ? significa opcional
// type Hero = {
//     id?: number,
//     name: string,
//     age: number
// }
// const hero: Hero = {
//     name: "thor",
//     age: 1500
// }

// function createHero(hero: Hero): Hero {
//     const {name, age} = hero
//     return { name, age }
// }

// const thor = createHero({name: "thor", age: 1500});

//! optional properties
// readonly es distinto de  Object.freeze()
type Hero = {
    readonly id?: string,
    name: string,
    age: number,
    isActive?: boolean
}
const hero: Hero = {
    name: "thor",
    age: 1500
}

function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

const thor = createHero({ name: "thor", age: 1500 });
console.log({ thor });
