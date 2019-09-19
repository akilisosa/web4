import { Account,AccountDAO} from "./DAO"

const accountDAO = new AccountDAO;
const accounts:Array<Account> = accountDAO.list();
console.log("loop using var/let - in");
for (var i in accounts){
    var account = accounts[i];
    console.log(account);
}
console.log("loop using let - of");
for (let account of accounts){
    console.log(account);
}

