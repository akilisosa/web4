class Employee{
    name:string;
    constructor(name:string){

        this.name=name;
    }
    greet(){
        console.log(`Good morning ${this.name}`);
    }
}

const employee1 = new Employee("adam");
console.log(employee1.name);
employee1.greet();
