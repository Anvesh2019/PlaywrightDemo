export async function GetStudentDetails(studentId: number): Promise<string> {
    // Simulating an asynchronous operation to fetch student details
    return "Anand";
}

export async function getStudNames(): Promise<string[]> 
{
    return ["Anand", "Ravi", "Suresh"];
}

export async function getStudMarks(): Promise<{ [key: string]: number }> {
    return {
        "Anand": 85,
        "Ravi": 90,
        "Suresh": 78
    };
}       
    