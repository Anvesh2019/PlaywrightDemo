export class clsStud
{
  
    age:number=25;
    sname:string="Maharshi";

    constructor(age1:number,name1:string)
    {
       this.age=age1;
       this.sname=name1;
    }
    public Displayname()
    {
      console.log("stud name is:" + this.sname);
    }

    public AddNumbers(a:number,b:number)
    {
      return a+b;
    }
    
    
    
}


