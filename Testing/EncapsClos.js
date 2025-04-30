function Counter() {
    let count = 0; 
  
    return {
      increment() {
        count++;
        console.log(count);
      },
      decrement() {
        count--;
        console.log(count);
      }
    };
  }
  
  const counter = Counter();
  counter.increment(); 
  counter.increment(); 
  counter.decrement(); 
  