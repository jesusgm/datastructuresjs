const SimpleLinkedList = require("./index").SimpleLinkedList;

const sll = new SimpleLinkedList();

sll.insertAtHead(10);
sll.insertAtHead(20);
sll.insertAtHead(30);
console.log(sll.toString());
sll.insertAtIndex(2, 40);
console.log(sll.toString());
sll.removeHead();
sll.removeHead();
sll.removeHead();
console.log(sll.toString());