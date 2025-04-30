class Animals{
    speak(){
        console.log("Humans speak");
        
    }
}
class Dogs extends Animals{
    speak(){
        console.log("Dogs bark");
    }
}
class Cat extends Dogs{
    speak(){
        console.log("Cats meow");
    }
}
const cat = new Cat();
cat.speak();