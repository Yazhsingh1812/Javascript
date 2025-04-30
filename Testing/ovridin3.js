class P{
    add(a,b,c){
        if(a,b,c != "string"){
            console.log("Error, string not accepted");
        }
        
    else if(b==undefined ){
            console.log(a);
         
        }
    
    else if (c==undefined){
        console.log(a+b);

    }
    
    else{
        console.log(a+b+c);
    }
        
    }
}
const p1= new P()
p1.add("Yazh");
p1.add(6,10);
p1.add(6,15,"Yazh");