
public class clsOverload
{
    function GetstudDetails(sno:string,sname:string): string;
    function GetstudDetails(sno:number,sname:number): number;
    function GetstudDetails(sno: any, sname:any):any
    {
      return sno+sname;
    }
    
    GetstudDetails("20","anand");    
    GetstudDetails(20,30);   
}