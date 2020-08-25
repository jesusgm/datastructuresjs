const Node = require("../nodes/single-node");

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
        this.length++;
    }

    getByIndex(index, value) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = this.head.next;
        }

        return current
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
        this.length++
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

module.exports = LinkedList;