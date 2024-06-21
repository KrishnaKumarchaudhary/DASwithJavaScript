class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  push(data) {
    var newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  //insert a node at the beginning
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  // Insert At end
  insertAtEnd(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  //Insert at specific position
  insertAtPostion(data, position) {
    if (position < 0) {
      console.log("Position should be>=0");
      return;
    }
    if (position === 0) {
      this.insertAtBeginning(data);
      return;
    }
    const newNode = new Node(data);
    let current = this.head;
    let prev = null;
    let index = 0;
    while (current !== null && index < position) {
      prev = current;
      current = current.next;
      index++;
    }
    if (current === null) {
      console.log("Position is greater than the length of the list");
      return;
    }
    prev.next = newNode;
    newNode.next = current;
  }
  //Delete at specific data.
  DeleteAtSpecificData(value) {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }
    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let prev = null;
    while (current !== null && current.data !== value) {
      prev = current;
      current = current.next;
    }
    if (current === null) {
      console.log(value + " not available in node");
      return;
    }
    prev.next = current.next;
  }
  //Delete from specific position
  deleteFromPosition(position) {
    if (position < 0) {
      console.log("position should be positive number");
      return;
    }
    if (position === 0) {
      this.head = this.head.next;
      return;
    }
    let index = 0;
    let curent = this.head;
    let prev = null;
    while (curent !== null && index < position) {
      prev = curent;
      curent = curent.next;
      index++;
    }
    if (curent === null) {
      console.log("Position value is higher than node length");
      return;
    }
    prev.next = curent.next;
  }
  //search in linklist with value
  search(value) {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return console.log(current.data, current.next);
      }
      current = current.next;
    }
  }
  traverse() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const LL1 = new LinkedList();
LL1.push("Push1");
LL1.push("Push2");
LL1.push("Push3");
LL1.push("Push4");
LL1.push("Push5");
LL1.push("Push6");
LL1.insertAtBeginning("Krishna");
LL1.insertAtEnd("insert at end");
LL1.insertAtPostion("insert at 3 ", 3);
//console.log(LL1.head.data);
//LL1.traverse();
LL1.search("Push6");
console.log("DeleteAtSpecificData");
LL1.DeleteAtSpecificData("Krishna");
LL1.traverse();
console.log("deleteFromPosition");
LL1.deleteFromPosition(20)
LL1.traverse();
