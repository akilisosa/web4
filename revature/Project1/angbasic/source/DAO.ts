export class Account {
    private name : string;
    constructor(name: string){
        this.name = name;
    }
}
export class AccountDAO{
    list():Array<Account>{
        let accounts = new Array<Account>();
        accounts.push(new Account("Adam"));
        accounts.push(new Account("Naresh"));
        return accounts;
    }
}