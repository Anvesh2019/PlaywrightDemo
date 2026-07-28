"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clsStud = void 0;
class clsStud {
    age = 25;
    sname = "Maharshi";
    city = "Hyderabad";
    constructor(age1, name1) {
        this.age = age1;
        this.sname = name1;
    }
    Displayname() {
        console.log("stud name is:" + this.sname);
    }
    AddNumbers(a, b) {
        return a + b;
    }
}
exports.clsStud = clsStud;
//# sourceMappingURL=clsStud.js.map