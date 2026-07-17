import { test, chromium,Page } from '@playwright/test';

test('Calling functions', async ({}) => {
    let str1: string = "Hyderbad";
    let str2: string = "India";
    let str3: string = addstrings(str1, str2);
    console.log(str3);
    let x:number=30;
    let y:number=20;
    let z:number=addnumbers(x,y);
    console.log("sum is:" + z);
    await printName("Techtutorialz");
    console.log(GetStudentDetails(25));
    console.log(greet());
    console.log(greet("Techtutorialz"));
});

function addstrings(str1: string, str2: string): string {
    return str1 + " " + str2;
}
function addnumbers(num1: number, num2: number): number {
    return num1 + num2;
}
function printName(name: string): void {
    console.log("Name is:" + name);
}
//Default params
function greet(name: string = "Guest") {

    console.log("Hello " + name);
}


async function GetStudentDetails(studentId: number): Promise<string> {
    // Simulating an asynchronous operation to fetch student details
    return "Anand";
}