const person = 
{
  fullName: function(city, country) 
  {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

var P= person.fullName.call(person1, " Oslo", " Norway"); 
console.log(P)