const person = {
  fullName: function () 
  {
    return this.firstName + " " + this.lastName;
  }
};

const nameofStudent = 
{
  firstName: "Yazh",
  lastName: "Singh"
}

const result = person.fullName.call(nameofStudent); 
console.log(result);