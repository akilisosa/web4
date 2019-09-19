"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO_1 = require("./DAO");
var accountDAO = new DAO_1.AccountDAO;
var accounts = accountDAO.list();
console.log("loop using var/let - in");
for (var i in accounts) {
    var account = accounts[i];
    console.log(account);
}
console.log("loop using let - of");
for (var _i = 0, accounts_1 = accounts; _i < accounts_1.length; _i++) {
    var account_1 = accounts_1[_i];
    console.log(account_1);
}
