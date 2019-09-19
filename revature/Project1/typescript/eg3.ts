export {}

class Employee2{
    name:string;
    constructor(name:string){

        this.name=name;
    }
    greet(){
        console.log(`Good morning ${this.name}`);
    }
}

class Manager extends Employee2{
    constructor(managerName:string){
        super(managerName);
    }
    delegateWork(){
        console.log("manager delegating tasls");
    }
}

const employee2 = new Employee2("adam");
console.log(employee2.name);
employee2.greet();

const manager1 = new Manager('juan');
manager1.greet.apply(employee2);
