class Deparmant {
    private readonly id : string;
    name: string = "";
    private employees : string[] = [];
    protected reportHolders : string[] = [];

    constructor(id:string,n: string){
        this.name = n;  
        this.id = id;
    }

    describe(
        this: Deparmant
    ){
        console.log('Deparment: ' + this.name)
    }

    addEmployee(employee:string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
       console.log(this.employees.length)
       console.log(this.employees) 
    }

    addReportHolder(reportHolder: string){
        this.reportHolders.push(reportHolder)
    }
}

const accounting = new Deparmant('d1','Accounting');

accounting.addEmployee("Alpha")
accounting.addEmployee("Pro")

console.log(accounting);
accounting.describe()
accounting.printEmployeeInformation()

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

class ITDeparment extends Deparmant{
    constructor(id: string, public admins: string[]){
        super(id, 'IT');
        this.admins
    }
}

class AccountingDeparment extends Deparmant{
    private lastReport: string;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value:string){
        if(!value){
            throw new Error("Please enter a valid report!");
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[] = []){
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    addReport(report: string){
        this.reports.push(report);
        this.lastReport = report;
    }

    printReports(){
        console.log(this.reports);
    }

    addReportHolder(reportHolder: string){
        if(reportHolder === "Max"){
            return
        }
        this.reportHolders.push(reportHolder)
    }

}
const account_it = new ITDeparment("d2",["Alp", "Alpha", "Kumbasar"])
account_it.describe()

console.log(account_it)

const acc_deparment = new AccountingDeparment("d3")
acc_deparment.addReportHolder("Max")
acc_deparment.addReportHolder("Alp")
console.log(acc_deparment) 
acc_deparment.addReport("Deneme")
console.log(acc_deparment.mostRecentReport)
acc_deparment.mostRecentReport = 'new last report'
console.log(acc_deparment.mostRecentReport)


