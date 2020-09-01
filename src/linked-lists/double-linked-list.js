const Node = require('../nodes/double-node');

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtHead(value) {
        const newNode = new Node(value, null, this.head);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    getByIndex(index) {
        if (index < 0 || index > this.length) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current;
    }

    insertAtIndex(index, data) {
        if (index < 0 || index > this.length - 1) {
            return null;
        } else if (index === 0) {
            this.insertAtHead(data);
        } else {
            const newPrevNode = this.getByIndex(index - 1);

            const newNextNode = this.getByIndex(index);

            const node = new Node(data, newPrevNode, newNextNode);

            node.next.prev = node;
            node.prev.next = node;

            this.length++;
        }
    }

    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    removeAtIndex(index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        if (index === 0) {
            this.removeHead();
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
            this.length--;
        }
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    getTail() {
        if (this.length === 0) {
            return null;
        }

        return this.getByIndex(this.length - 1);
    }

    concat(list) {
        if (this.length > 0 && list.length > 0) {
            const tail = this.getTail();
            list.head.prev = tail;
            tail.next = list.head;
        }
        if (this.length === 0 && list.length > 0) {
            this.head = list.head;
        }
        this.length = this.length + list.length;
    }

    pop() {
        if (this.length === 0) {
            return null;
        }
        const firstElement = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;

        return firstElement;
    }

    toString() {
        let output = 'null';
        let current = this.head;
        while (current) {
            output = `${output} <- ${current.value} -> `;
            current = current.next;
        }

        return `${output}null`;
    }
}

DoubleLinkedList.fromValues = function (...values) {
    const ll = new DoubleLinkedList();
    for (let i = values.length - 1; i >= 0; i--) {
        ll.insertAtHead(values[i]);
    }

    return ll;
};

module.exports = DoubleLinkedList;