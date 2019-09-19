export{}
interface Person{
    firstName:string;
    lastName: string;
}

function fullName(person: Person){
    console.log(`${person.firstName} - ${person.lastName}`);
}

let person = {
    firstName:"akili",
    lastName:"sosa"
}
fullName(person);