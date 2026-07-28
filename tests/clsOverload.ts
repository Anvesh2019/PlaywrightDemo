class clsOverload {

    // Overload signatures
    GetstudDetails(sno: number, sname: number): number;
    GetstudDetails(sno: string, sname: string): string;

    // Implementation
    GetstudDetails(sno: any, sname: any): any {
        return sno + sname;
    }
}