"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStudentDetails = GetStudentDetails;
exports.getStudNames = getStudNames;
exports.getStudMarks = getStudMarks;
async function GetStudentDetails(studentId) {
    // Simulating an asynchronous operation to fetch student details
    return "Anand";
}
async function getStudNames() {
    return ["Anand", "Ravi", "Suresh"];
}
async function getStudMarks() {
    return {
        "Anand": 85,
        "Ravi": 90,
        "Suresh": 78
    };
}
//# sourceMappingURL=myfunctions.js.map