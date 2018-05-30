// console.log(greetName("Steph"));
// console.log(greetName());

// function greetName(name? : string) : string {
//     if (name)
//         return "Hello " + name + "! Welcome to typescript";
//     else
//         return "Hello stranger! Welcome to typescript";
// }

// //function definition.
// var greetUnamed : (name: string)=> string = function (name: string) :string {
//     if (name)
//         return "greetUnamed Hello";
// };
// console.log(greetUnamed("Unknown"));

// //rest parameters
// var greetGroup : (...names : string[]) => string = function (...names : string[]) : string {
//     var ret: string = "";
//     for (var i = 0; i < names.length; i++) {
//         ret = ret.concat(names[i] + " ");
//     }
//     return ret;
// };
// console.log(greetGroup("Shanice", "Margot", "Mier", "Mar", "Liza", "Annie", "JR", "Ramon", 
//     "Atty. Yabao", "Dean Estenzo", "Miles"));


    
// //function overloading
// function addInfo(name:string) : string;
// function addInfo(age:number) :string;
// function addInfo(maritalStat:boolean) :string;
// function addInfo(value: (string | number | boolean) ):string {
//     var ret : string = "";
//     switch (typeof value) {
//         case 'string':
//             ret = "Your name is: "+ value;
//             break;
//         case 'number':
//             ret = "You will be " + value+1 + " next year";
//             break;
//         case 'boolean':
//             ret = (value) ? "You are single" : "You are married";  
//     }
//     return ret;
// }
// /******************************************/
// /**************** OOP *********************/
// /******************************************/

// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name =>
//         {
//             if (name !== 'constructor') {
//             derivedCtor.prototype[name] = baseCtor.prototype[name];
//             }
//         });
//     });
// }
// //applyMixins(child implements [parent1, parent2]);



// //<reference path='Employee.ts'/>
// import {Employee} from "./Employee";



// var employee1 = new Employee("Marie Stephanie", "Alesna", "s.alesna@netsystem.cz", "Junior Programmer",
//     235232, new Date("05-09-2018"));

// console.log("Employee Full name: " + employee1.getEmpName());
// console.log(employee1.getEmployeeDetails());