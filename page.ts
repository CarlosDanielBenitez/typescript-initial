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


//! optional properties (dejar comentado)


// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type Hero = {
//     id?: HeroId,
//     name: string,
//     age: number,
//     isActive?: boolean
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



//! Union types (keep comment) using or

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal';
// type Hero = {
//     id?: HeroId,
//     name: string,
//     age: number,
//     isActive?: boolean,
//     powerScale?: HeroPowerScale
// }
// const hero: Hero = {
//     name: "thor",
//     age: 1500
// }

// function createHero(hero: Hero): Hero {
//     const { name, age } = hero
//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true

//     }
// }

// const thor = createHero({ name: "thor", age: 1500 });
// thor.powerScale = "planetary"


//!intersection types using &

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal';


// type HeroBasicInfo = {
//     name: string,
//     age: number,
// }
// type HeroProperties = {
//     id?: HeroId,
//     isActive?: boolean,
//     powerScale?: HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties

// const hero: Hero = {
//     name: "thor",
//     age: 1500
// }

// function createHero(input: HeroBasicInfo): Hero {
//     const { name, age } = input
//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true

//     }
// }

// const thor = createHero({ name: "thor", age: 1500 });
// thor.powerScale = "planetary"



//! Type Indexing (keep comment)

// type HeroProperties = {
//     isActive: boolean,
//     address: {
//         planet: string,
//         city: string
//     }
// }
// const addressHero: HeroProperties['address'] = {
//     planet: 'Hearth',
//     city: 'Buenos Aires'
// }

//! Type from value (permite crear type a traves de coidigo ya estructurado) keep comment
// const address = {
//     planet: 'Hearth',
//     city: 'Buenos Aires'
// }

// type Address = typeof address

// const addressTwitch: Address = {
// planet: 'Mars',
// city: 'Twitch'
// }

//! Type from function return (recuperar el tipo para usarla en otra funcion)
// function createAddress() {
//     return {
//         planet: 'Tierra',
//         city: 'Barcelona'
//     }
// }

// type Address = ReturnType< typeof createAddress>

//! Arrays

const foods: string[] = [];
foods.push('Noodles')
foods.push('Rice')

const languages: (string | number)[] = []
languages.push('JavaScript')
languages.push(2)

//! Matrices y tuplas 
//* [
//*     ['1','0','1']  < string
//*     ['0','1','0']  < string
//*     ['1','0','1']  < string
//* ]  

type CellValue = 'X' | 'O' | ''
type GameBoard = [ //Tupla is an array with limit
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard[][] = []
