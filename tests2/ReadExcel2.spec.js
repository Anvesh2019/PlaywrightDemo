"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const XLSX = __importStar(require("xlsx"));
(0, test_1.test)('Read Excel demo', async () => {
    const filePath = 'C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/Training/PlaywrightDemo/tests2/Anvesh.xlsx';
    const marsfilePath = 'C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/MARS/FailureOutput.xslx';
    const workbook = XLSX.readFile(filePath);
    //console.log('Sheet Names:', workbook.SheetNames);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
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
    if (data.length > 0) {
        console.log("Row count:" + data.length);
        for (const row of data) {
            console.log('Name:', row['Anvesh']);
            console.log('City:', row['Hyderabad']);
            console.log('-------------------');
        }
    }
});
(0, test_1.test)('Read Failure output file', async () => {
    const marsfilePath = 'C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/MARS/FailureOutput.xlsx';
    const workbook = XLSX.readFile(marsfilePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    if (data.length > 0) {
        console.log("Row count:" + data.length);
        for (const row of data) {
            //  console.log('Equivalent:', row['Equivalent']);
            // console.log('Specification Name:', row['Specification Name']);
            // console.log('-------------------');
        }
    }
    const specificationToFind = 'CartonPGF IAMS PRP CIG TN&SM 1.98LB US';
    const exists = data.some(row => row['Specification Name'] === specificationToFind);
    if (exists) {
        console.log(`${specificationToFind} found in Excel`);
    }
    else {
        console.log(`${specificationToFind} NOT found in Excel`);
    }
});
//# sourceMappingURL=ReadExcel2.spec.js.map