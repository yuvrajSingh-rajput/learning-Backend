//TODO => API 1: {Pick}: use to select a group of type of properties from a particular type
interface newUser {
    readonly id: string,
    name: string, 
    age: number,
    email: string, 
    readonly password: string
}
type UpdateProps = Pick<newUser, "name" | "age" | "email">
function updateUser<T>(updatedProps: T){
    // hit the database to update the user
} 
updateUser<UpdateProps>({
    name: "yuvraj singh",
    age: 19,
    email: "yuvrajsingh01579@gmail.com"
});     //we have to give all the properties which includes in "UpdateProps" type;


//TODO =>################# API 2: {Partial<type>:} It is used when it is optional to give every properties by the user ###################

type updatedPropsOptional = Partial<UpdateProps> 
updateUser<updatedPropsOptional>({name: "yuvrajsingh"});

//TODO => API 3: [readOnly]---------------------------------------------------------------------------------------------------------------
// It is used when you don't want to change internal properties as well: (usecase: API Keys);


//TODO: ###################################  API 4: {Record<key type, value type>} #############################################
interface students{
    id: string,
    name: string,
    course: string,
    department: string
};
//! It is an ugly syntax and can be replaced by {Record<key type, value type>}
// type studentData = {
//     [key: string] : students
// }

type studentData = Record<string, students>
const student: studentData = {
    "1" : {
        id: "1",
        name: "yuvraj",
        course: "B.Tech",
        department: "CSE"
    },
    // more datas
}

//TODO: API 4: {Map<key type, value type>}
const users = new Map<string, {id: string, name: string, course: string, department: string}>();
users.set("1", {
        id: "1",
        name: "yuvraj",
        course: "B.Tech",
        department: "CSE"
    },);
    
console.log(users.get("1"));

//TODO: API 5: {Exclude<type, "param 1" | "param 2"}
type EventType = 'click' | 'mousemove' | 'scroll';
type ExcludeEvent = Exclude<EventType, 'scroll'>

const handleEvent = (event: ExcludeEvent) => {
    console.log("handling event:", event);
}
handleEvent("click");
// handleEvent("scroll") : compile time error
