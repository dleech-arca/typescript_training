const User = {
    name: "David",
    email: "david.leech@test.net",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

createUser({name:"David",isPaid:true});

function createCourse():{name: string, price: number}{
    // return {}
    return {name: "reactjs", price: 399};
}

let newUser = {name:"David",isPaid:true, email: "dl.dl.com"};
createUser(newUser);

type User = {
    name: string,
    email: string,
    isActive: boolean
}

//type myString = string;

function createUser1(user: User): User{
    return {name:"",email:"",isActive:true};
}
createUser1({name:"",email:"",isActive:true});

export {};