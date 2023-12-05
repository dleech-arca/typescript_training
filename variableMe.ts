let greetings: string = "Hello David";

//let mynum = 6;

greetings.toLowerCase();
console.log(greetings);

// number
let userId: number = 334455.3;
let userId2 = 334455.3;
userId2.toFixed();

// boolean
let isLoggedIn: boolean = false;

// any
let hero;
let hero2: string;
function getHero(){
    return "Thor";
}

hero = getHero();
hero2 = getHero();

export {};