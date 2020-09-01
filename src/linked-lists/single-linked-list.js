const Node = require("../nodes/single-node");

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  insertAtIndex(index, data) {
    if (index == 0) {
      return this.insertAtHead(data);
    }

    let prev = this.getByIndex(index - 1);
    if (prev === null) {
      return null;
    }
    prev.next = new Node(data, prev.next);
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index == 0) {
      this.removeHead();
    }
    const prev = this.getByIndex(index - 1);
    if (prev == null) {
      return null;
    }

    prev.next = prev.next.next;
    this.length--;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  getTail() {
    return this.getByIndex(this.length - 1);
  }

  concat(list) {
    this.getTail().next = list.head;
    this.length = this.length + list.length;
  }

  pop() {
    const element = this.head;
    this.head = this.next;
    this.length--;
    return element;
  }

  toString() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }

    return `${output}null`;
  }
}

SingleLinkedList.fromValues = function (...values) {
  const ll = new SingleLinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }

  return ll;
}

module.exports = SingleLinkedList;