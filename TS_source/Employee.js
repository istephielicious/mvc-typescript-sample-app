"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Logger_1 = require("./Logger");
var Person = /** @class */ (function () {
    function Person(lName, fName, email) {
        this._fName = fName;
        this._lName = lName;
        this._email = email;
    }
    Person.prototype.getFullName = function () {
        // getFullName : () => string = function () {
        return this._fName + " " + this._lName;
    };
    ;
    Person.prototype.printInfo = function () {
        return "PERSONAL DETAILS \n" +
            "Name: " + this.getFullName() + "\n" +
            "Email: " + this._email;
    };
    //setters.
    Person.prototype.setFname = function (str) {
        this._fName = str;
    };
    Person.prototype.setLname = function (str) {
        this._lName = str;
    };
    Person.prototype.setEmail = function (str) {
        this._email = str;
    };
    //getters.
    Person.prototype.getFname = function () {
        return this._fName;
    };
    Person.prototype.getLname = function () {
        return this._lName;
    };
    Person.prototype.getEmail = function () {
        return this._email;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fname, lname, email) {
        var _this = _super.call(this, lname, fname, email) || this;
        Logger_1.printLog(_this, "Create Employee");
        _this._id = Employee._EMP_COUNTER++;
        return _this;
    }
    //getter.
    Employee.prototype.getID = function () {
        Logger_1.printLog(this, "Employee::getID()");
        return this._id;
    };
    Employee.prototype.empCount = function () {
        return Employee._EMP_COUNTER;
    };
    Employee.prototype.printInfo = function () {
        Logger_1.printLog(this, "Employee::printInfo()");
        return "EMPLOYEE DETAILS\n" +
            "Name: " + this.getFullName() + "\n" +
            "Email: " + this.getEmail() + "\n" +
            "ID: " + this._id;
    };
    Employee._EMP_COUNTER = 0;
    return Employee;
}(Person));
exports.Employee = Employee;
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(fname, lname, email, cust_id) {
        var _this = _super.call(this, lname, fname, email) || this;
        _this._cust_id = cust_id;
        return _this;
    }
    return Customer;
}(Person));
exports.Customer = Customer;
