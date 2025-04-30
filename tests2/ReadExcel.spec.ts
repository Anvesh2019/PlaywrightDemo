import {expect, Page, Browser, test} from '@playwright/test';
import { readFile, utils, read as _read } from 'xlsx';

const xlsx = require('xlsx');
const path="C:\Users\Anand.Gummadilli\Documents\Anand_Details\PlaywrightDemo\PlaywrightDemo-1\tests2\Anvesh.xlsx";
const workbook = xlsx.read(path);
const worksheet = workbook.Sheets['Sheet1'];
const data = xlsx.utils.sheet_to_json(worksheet);

test('Read Excel', async()=>{
   
   const lastCellName = xlsx.utils.encode_cell({ r:1,c:1})
   console.log(lastCellName);
   console.log(xlsx.utils.encode_range({ r:1,c:1}));
});

test('Read environment variables', async() => {
    console.log(process.env.OS); 
    console.log(process.env.Path); 
    console.log(process.env.windir);
  });
/*
  function getDataRange(data) {
    const dataWithValues = _.pickBy(data, (value, key) => !!value.v)
    const cellNamesWithValues = .keys(dataWithValues)
    const cellsWithValues = cellNamesWithValues.map(cell => xlsx.utils.decode_cell(cell))
    const maxRow = .max(cellsWithValues.map(cell => cell.r))
    const maxColumn = .max(cellsWithValues.map(cell => cell.c))
    const lastCellName = xlsx.utils.encode_cell({ c: maxColumn, r: maxRow })
    return `A1:${lastCellName}`
  }
    */