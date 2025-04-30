class ordinary_phone {
    functions = ["calls", "messages"];
  }
  
  class iphone {
    functions = ["calls", "messages"];
    camera_experience() {
      console.log("i am very well known for my camera");
    }
  }
  
  let phone1: ordinary_phone = new iphone();
  
  console.log(phone1.functions);
  console.log(phone1.camera_experience());
  
//   let phone2: iphone = new ordinary_phone();
  
  