function divide(a, b) {
    if (b === 0) {
      throw new Error("You can't divide by zero!");
    }
    return a / b;
  }
  
  try {
    var result = divide(10, 1);
  } catch (error) {
    console.log("Custom error: " + error.message);
  }
  console.log(result)