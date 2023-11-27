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



# Lists and its types
class
 
Node
 
{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class
 
LinkedList
 
{
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtHead(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAtTail(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeFromHead() {
    if (this.isEmpty()) {
      return undefined;
    }

    const removedNode = this.head;
    this.head = removedNode.next;

    if (this.head === null) {
      this.tail = null;
    }

    return removedNode.value;
  }

  removeFromTail() {
    if (this.isEmpty()) {
      return undefined;
    }

    let previousNode = null;
    let currentNode = this.head
