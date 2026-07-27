import { clsStud } from "./clsStud";
export class clsStudChild extends clsStud
{
  
   sname:string="Maharshi Child";
   public Displayname()
    {
      console.log("stud name is:" + this.sname);
    }
      
    
}
