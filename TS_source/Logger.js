"use strict";
exports.__esModule = true;
function printLog(loggerObj, log) {
    loggerObj.log = log;
    console.log(loggerObj.log);
}
exports.printLog = printLog;
// let myObj = {size: 10, log: ""};
// printLog(myObj,"Size 10 Object");
// interface LabelledValue {
//     label: string;
// }
// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
// }
// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);
