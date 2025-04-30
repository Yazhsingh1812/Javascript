class Counter {
    #count = 0; 
    increment() {
      this.#count++;
      console.log(this.#count);
    }
  
    decrement() {
      this.#count--;
      console.log(this.#count);
    }
  
    get value() {
      return this.#count;
    }
  }
  
  const counter = new Counter();
  counter.increment(); 
  counter.decrement(); 
  
  //console.log(counter.#count); 
  console.log(counter.value);  