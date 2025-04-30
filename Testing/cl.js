
  
  const person1 = 
  {
    firstName:"John",
    lastName: "Doe"
  }
  
function stuName()
{
    console.log(this.firstName)
}
stuName.call(person1);

  
  