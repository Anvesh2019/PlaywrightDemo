import {expect,test} from '@playwright/test'

function greet(): void //returns void
{
    console.log("Welcome to tech tutorialz");
}

  test('calling function', async()=>{
    let msg: void = greet();
    console.log(msg);
  });
  
function addnumbers(x:number, y:number):number  //function returns int
{
 return x+y;
}

test('calling int function', async()=>{
    console.log("sum is:" + addnumbers(20,30));
  });

function GetSTuddetailsBySno(sno:number):string  //function returns string
{
    if(sno==20)
    {
        return "Anand";
    }
    else if(sno==30)
    {
        return "Anvesh";
    }
    else
    {
        return "Asha"
    }
 
}

test('calling string function', async()=>{
    const studName:string=GetSTuddetailsBySno(20);
    console.log("stud name is:" + studName);
  });