// Declaration
const x: number = 5;
console.log(x);

// Question 1:
function greet(firstname: string){
    console.log(`Hello ${firstname}`);
}
greet("yuvraj");

// Question 2: Type inference
// function sum(a: number, b: number){
//     return a + b;
// }

// Question 3: give explicitly type
function sum(a: number, b: number): number{
    return a + b;
}
console.log("sum is", sum(5, 7));

// Question 4;
function isValid(age: number): boolean{
    return age >= 18;
}
if(isValid(15)) console.log("user is valid!");
else console.log("User is not valid!");

// question 5;
function runAfter1s(fn : (a: number, b: number) => void){   // return typeof function
    setTimeout(fn, 1000);
}
function run(a: number, b: number){
    console.log("I am running 1 second late!", a, b);
}
runAfter1s(() => run(5, 7));

//TODO: INTERFACES
interface User {
    firstName: string,
    lastName: string,
    email: string,
    age: number,
};
// Question 6;
const user = {
    firstName: "yuvraj",
    lastName: "singh",
    email: "yuvrajsingh01579@gmail.com",
    age: 19
};
function isLegal(user: User): boolean{
    if(user.age >= 18){
        return true;
    }else{
        return false;
    }
}
function greetInterface(user: User): void{
    console.log("Hello", user.firstName, user.lastName);
}
greetInterface(user);   // ----1

if(isLegal(user)){      // ----2
    console.log("User is legal!");
}else{
    console.log("user is not legal!");
}

// Question 7: What is the difference between type and interface ?
type Person2 = {
    name: string, 
    age: number,
    greet(phrase: string) : void;
}
//! Implementing INTERFACES: in class -> The major difference between "type" & "interface"
interface Person {
    name: string, 
    age: number,
    greet(phrase: string) : void;
}

class Employee implements Person{
    name: string;
    age: number;

    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`)
    }
};
const e = new Employee("yuvraj", 22);
console.log(e.greet("Welcome back"));

//TODO: ----------UNIONS: (can not be done using interfaces) L = R1 | R2 then => L: type(only) while Ri(type or interfaces)-----------
// Question 8: print the id of a user which can be either number or string
type typeId = string | number;
function getId(id: (string | number)){
    console.log("ID", id);
}
getId(6846181729);
getId("fhoqwj382973qkl23c--=p");

//TODO: --------INTERSECTION: (can not be done using interfaces) L = R1 | R2 then => L: type(only) while Ri(type or interfaces)--------
type Employees = {
    name: string,
    startDate: Date;
};
type Managers = {
    name: string,
    department: string;
};
type TamLead = Employees & Managers;     // Employee as well as Manager
const teamLead: TamLead ={
    name: "yuvraj singh",
    startDate: new Date(),
    department: "Computer Science"
};

// Question 9: filter out the users that are legal
interface User2 {
    firstname: string,
    lastname: string,
    age: number;
}
function filterUsers(users: User2[]){
    const result = users.filter((user) => {
        user.age >= 18;
    });
    return result;
}

//! Note: We can not define multiple functions of same name in same directory either are in different files too in typescript in case they are not exported

//TODO: ---------------------------------------------------------ENUMS-------------------------------------------------------------------
enum Directions {
    Up = 1,
    Down, // By default 2
    Left, // 3
    Right // 4
}
function doSomething(keyPressed: Directions){
    if(keyPressed == Directions.Down){
        // do something required
    }
}
doSomething(Directions.Up);
doSomething(Directions.Down);
console.log(Directions.Up);
console.log(Directions.Down);
console.log(Directions.Left);
console.log(Directions.Right);
// one use case in express is to store the status codes as enums and return as status in more readable format


//TODO: ------------------------------------------------------------GENERICS-----------------------------------------------------------
function identity<T>(arg: T){
    return arg;
}
const output1 = identity<string>("yuvraj");
const output2 = identity<number>(10);
// now we can do 
output1.toUpperCase();

// Question 10: Write a function that takes an array as input of a type and if it is string array the convert all the strings in upppercase
function convertUppercase<T>(arr: T[]): T{
    return arr[0];
}
const output = convertUppercase<string>(["yuvraj singh", "shiva singh"]);
console.log(output.toUpperCase());
const output3 = convertUppercase<number>([1, 2, 3]);
console.log(output3);
