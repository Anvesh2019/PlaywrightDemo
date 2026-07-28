"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
class Student {
    studentId;
    studentName;
    constructor(studentId, studentName) {
        this.studentId = studentId;
        this.studentName = studentName;
    }
    getStudentDetails() {
        return `Student ID: ${this.studentId}, Name: ${this.studentName}`;
    }
}
(0, test_1.test)('Using interface', async () => {
    let student1 = new Student(1, "Anand");
    console.log(student1.studentId);
    console.log(student1.studentName);
    console.log(student1.getStudentDetails());
});
//# sourceMappingURL=interface.spec.js.map