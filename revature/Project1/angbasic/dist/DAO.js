"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = /** @class */ (function () {
    function Account(name) {
        this.name = name;
    }
    return Account;
}());
exports.Account = Account;
var AccountDAO = /** @class */ (function () {
    function AccountDAO() {
    }
    AccountDAO.prototype.list = function () {
        var accounts = new Array();
        accounts.push(new Account("Adam"));
        accounts.push(new Account("Naresh"));
        return accounts;
    };
    return AccountDAO;
}());
exports.AccountDAO = AccountDAO;
