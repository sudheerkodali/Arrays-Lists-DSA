# Basic structure of DSA, USING STACK with PUSH, POP items
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return
 
undefined;
    }

    return
 
this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return
 
undefined;
    }

    return
 
this.items[this.items.length - 1];
  }

  isEmpty() {
    return
 
this.items.length === 0;
  }
}
