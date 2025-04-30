class MyCustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "MyCustomError";
    }
  }
  
  try {
    throw new MyCustomError("This is a custom error!");
  } catch (error) {
    console.log(error.name + ": " + error.message);
  }
  