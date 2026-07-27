import { abstractClsStud } from "./absClsStud";

export class clsStudAbsChild extends abstractClsStud {

    age: number;
    sname: string;

    constructor(age: number, sname: string) {
        super();
        this.age = age;
        this.sname = sname;
    }

    Displayname(): void {  //abstarct method implementation
        console.log(`Student Name: ${this.sname}`);
    }

    GetStudDetails(): string { //abstract method implementation
        return `Age: ${this.age}, Name: ${this.sname}`;
    }
}