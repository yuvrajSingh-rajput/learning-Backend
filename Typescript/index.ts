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
function runAfter1s(fn : () => void){   // return typeof function
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

//TODO: UNIONS: (can not be done using interfaces)
// Question 8: print the id of a user which can be either number or string
type typeId = string | number;
function getId(id: (string | number)){
    console.log("ID", id);
}
getId(6846181729);
getId("fhoqwj382973qkl23c--=p");

//TODO: INTERSECTION: (can not be done using interfaces)
type Employees = {
    name: string,
    startDate: Date;
};
type Managers = {
    name: string,
    department: string;
};
type TamLead = Employees & Managers;     // Employee as well as Manager
const teamLead: TamLead = {
    name: "yuvraj singh",
    startDate: new Date(),
    department: "Computer Science"
};
