"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Deparmant = /** @class */ (function () {
    function Deparmant(id, n) {
        this.name = "";
        this.employees = [];
        this.reportHolders = [];
        this.name = n;
        this.id = id;
    }
    Deparmant.prototype.describe = function () {
        console.log('Deparment: ' + this.name);
    };
    Deparmant.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Deparmant.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Deparmant.prototype.addReportHolder = function (reportHolder) {
        this.reportHolders.push(reportHolder);
    };
    return Deparmant;
}());
var accounting = new Deparmant('d1', 'Accounting');
accounting.addEmployee("Alpha");
accounting.addEmployee("Pro");
console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();
// Property 'employees' is private and only accessible within class 'Deparmant'.
// accounting.employees[2] = "Anna"
// accounting.printEmployeeInformation()
// let accountingCopy = { describe : accounting.describe }
// The 'this' context of type '{ describe: (this: Deparmant) => void; }' is not assignable to method's 'this' of type 'Deparmant'.
//   Property 'name' is missing in type '{ describe: (this: Deparmant) => void; }' but required in type 'Deparmant'
// accountingCopy.describe();
// let accountingCopy = { name:'s' ,describe : accounting.describe }
// accountingCopy.describe();
// Inheritance
var ITDeparment = /** @class */ (function (_super) {
    __extends(ITDeparment, _super);
    function ITDeparment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        _this.admins;
        return _this;
    }
    return ITDeparment;
}(Deparmant));
var AccountingDeparment = /** @class */ (function (_super) {
    __extends(AccountingDeparment, _super);
    function AccountingDeparment(id, reports) {
        if (reports === void 0) { reports = []; }
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDeparment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please enter a valid report!");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDeparment.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    AccountingDeparment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDeparment.prototype.addReportHolder = function (reportHolder) {
        if (reportHolder === "Max") {
            return;
        }
        this.reportHolders.push(reportHolder);
    };
    return AccountingDeparment;
}(Deparmant));
var account_it = new ITDeparment("d2", ["Alp", "Alpha", "Kumbasar"]);
account_it.describe();
console.log(account_it);
var acc_deparment = new AccountingDeparment("d3");
acc_deparment.addReportHolder("Max");
acc_deparment.addReportHolder("Alp");
console.log(acc_deparment);
acc_deparment.addReport("Deneme");
console.log(acc_deparment.mostRecentReport);
acc_deparment.mostRecentReport = 'new last report';
console.log(acc_deparment.mostRecentReport);
