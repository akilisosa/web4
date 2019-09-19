export {}

class Employee2{
    protected name:string;
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
//you have access morningering thisngs

//declorations are llike anotations and can be applyied everything

//@webservlet . it is a pertern 
//evaluate 
//ex