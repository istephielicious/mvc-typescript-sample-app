"use strict";
// console.log(greetName("Steph"));
// console.log(greetName());
exports.__esModule = true;
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
// var emp1 = new Employee("Marie Stephanie", "Alesna", "s.alesna@netsystem.cz");
// console.log(emp1.getFullName());
// console.log(emp1.getID());
// var emp2 = new Employee("sdfdsf", "dfdsf", "srewrew@example.com");
// console.log(emp2.getFullName());
// console.log(emp2.getID());
var Employee_1 = require("./Employee");
/// <reference path="Logger.ts" />
// import {Model} from "./Model";
// import { View } from "./View";
// import { Controller } from "./Controller";
// /// <reference path="jquery.d.ts" />
var emp1 = new Employee_1.Employee("Marie Stephanie", "Alesna", "s.alesna@netsystem.cz");
// var model :Model = new Model(emp1),
//     view = new View(model, {
//             'empTbl': $('#displayEmp')
//     }),
//     controller = new Controller(model,view);
// view.display();
// emp1.log = "Create employee"
// console.log(emp1.getFullName())
console.log(emp1.printInfo());
