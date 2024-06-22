console.log("Hello double linked list");
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // insert a node at the beginning of the List
  insertAtBeginning(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }
  //insert node at the end of the list
  insertAtEnd(value) {
    let newNode = new Node(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // Insert a node at a specific postion
  insertAtPosition(data, position){
    if(position <0){
      console.log("Position should be >= 0");
      return;
    }
    if(position ===0){
      this.insertAtBeginning(data);
      return;
    }
    const newNode = new Node(data);
    let current = this.head;
    let index =0;
    while(current !== null && index< position){
      current =current.next;
      index++
    }
    if(current===null){
      console.log("Position is greater than the length of the list");
      return;
    }
    newNode.next = current;
    newNode.prev = current.prev;
    if(current.prev){
      current.prev.next = newNode;
    }
    current.prev = newNode;
    if(index === 0){
      this.head = newNode;
    }
  }
  //traverse the list from the tail to the end
  traverseReverse() {
    if (this.tail === null) {
      console.log("List is empty");
      return;
    }
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }

  //Search for a node with specific data
  search(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) {
        console.log(value + " is available in list");
        return;
      }
      current = current.next;
    }
    console.log(value + " not available in node");
    return;
  }
}

const DLL1 = new DoublyLinkedList();
DLL1.insertAtBeginning("Krishna");
DLL1.insertAtBeginning("Kumar");
DLL1.insertAtBeginning("Chaudhary");
DLL1.insertAtEnd("Insert At end");
DLL1.insertAtPosition("Inset at specific postion", 2);
DLL1.traverseReverse();
DLL1.search("Krishna");
