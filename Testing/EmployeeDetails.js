class EmployeeDetails{
    static a=5;
//     constructor() {
//         console.log("hi I'm constructor 1")

// }
    constructor(x,y){
        this.x= x;
        this.y= y;
        console.log("I'm constructor 2")

    }
static stuName() {
    let b=10
    console.log(b)
}
unknwn(cat,dog){
    console.log(cat,dog)
}
unknwn(){
    console.log("Print")
}
}
const employeeDetails= new EmployeeDetails();
console.log(EmployeeDetails.a)
//employeeDetails.stuName()
// EmployeeDetails.stuName()
employeeDetails.unknwn(5,6) 