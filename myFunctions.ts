function addTwo(num: number) : number{
    // num.toUpperCase();

    //return "";
    return num + 2;
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean){

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5);
getUpper("david");
signUpUser("david","test_email@test.net","test123!",false);
loginUser("dl","dl.dl.com");

// function getValue(myVal: number): string{
//     if (myVal > 5){
//         return true;
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor","spiderman","ironman"]
//const heros = [1,2,3]

heros.map((hero): string => {
    //return 2
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log();
    // return 1
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
    // return 1
}

export {};