"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clsStudAbsChild = void 0;
const absClsStud_1 = require("./absClsStud");
class clsStudAbsChild extends absClsStud_1.abstractClsStud {
    age;
    sname;
    constructor(age, sname) {
        super();
        this.age = age;
        this.sname = sname;
    }
    Displayname() {
        console.log(`Student Name: ${this.sname}`);
    }
    GetStudDetails() {
        return `Age: ${this.age}, Name: ${this.sname}`;
    }
}
exports.clsStudAbsChild = clsStudAbsChild;
//# sourceMappingURL=clsStudAbsChild.js.map