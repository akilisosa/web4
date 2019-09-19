"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee2 = /** @class */ (function () {
    function Employee2(name) {
        this.name = name;
    }
    Employee2.prototype.greet = function () {
        console.log("Good morning " + this.name);
    };
    return Employee2;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("manager delegating tasls");
    };
    return Manager;
}(Employee2));
var employee2 = new Employee2("adam");
console.log(employee2.name);
employee2.greet();
var manager1 = new Manager('juan');
manager1.greet.apply(employee2);
