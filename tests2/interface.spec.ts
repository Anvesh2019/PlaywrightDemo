import {Page,chromium,test} from "@playwright/test"; 

interface infStudent
{
    studentId:number;
    studentName:string;
    getStudentDetails():string;
}
class Student implements infStudent
{
    studentId:number;   
    studentName:string;
    constructor(studentId:number,studentName:string)
    {
        this.studentId=studentId;
        this.studentName=studentName;
    }
    getStudentDetails():string {
        return `Student ID: ${this.studentId}, Name: ${this.studentName}`;
    }
}

test('Using interface', async () => {
    let student1: infStudent = new Student(1, "Anand");
    console.log(student1.studentId);
    console.log(student1.studentName);
    console.log(student1.getStudentDetails());
});