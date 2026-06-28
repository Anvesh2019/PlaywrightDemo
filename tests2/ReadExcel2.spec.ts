import { test } from '@playwright/test';
import * as XLSX from 'xlsx';

test('Read Excel demo', async () => {

    const filePath: string =
        'C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/Training/PlaywrightDemo/tests2/Anvesh.xlsx';

        const marsfilePath: string='C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/MARS/FailureOutput.xslx';
    const workbook: XLSX.WorkBook = XLSX.readFile(filePath);

    //console.log('Sheet Names:', workbook.SheetNames);

    const sheetName: string = workbook.SheetNames[0];
    const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

    const data: any[] = XLSX.utils.sheet_to_json(worksheet);

    //console.log(data);
/*
    if (data.length > 0) {
        //console.log(Object.keys(data[0]));
        //console.log('Name:', data[0].Name);
        //console.log('Age:', data[0].Age);
        console.log(data[0]['Anvesh']);
        console.log(data[0]['Hyderabad']);

        console.log(data[1]['Anvesh']);
        console.log(data[1]['Hyderabad']);
        
    }
        */
    if (data.length > 0) 
    {
      console.log("Row count:" + data.length);

    for (const row of data) 
    {
        console.log('Name:', row['Anvesh']);
        console.log('City:', row['Hyderabad']);
        console.log('-------------------');
    }
   }
});


test('Read Failure output file', async () => {

    const marsfilePath: string='C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/MARS/FailureOutput.xlsx';

    const workbook: XLSX.WorkBook = XLSX.readFile(marsfilePath);


    const sheetName: string = workbook.SheetNames[0];
    const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

    const data: any[] = XLSX.utils.sheet_to_json(worksheet);

           
    if (data.length > 0) 
    {
      console.log("Row count:" + data.length);

    for (const row of data) 
    {
      //  console.log('Equivalent:', row['Equivalent']);
       // console.log('Specification Name:', row['Specification Name']);
       // console.log('-------------------');
    }
   }

const specificationToFind = 'CartonPGF IAMS PRP CIG TN&SM 1.98LB US';

const exists = data.some(
    row => row['Specification Name'] === specificationToFind
);

if (exists) {
    console.log(`${specificationToFind} found in Excel`);
} else {
    console.log(`${specificationToFind} NOT found in Excel`);
}
});
