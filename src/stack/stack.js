class Stack {
    constructor() {
        this._items = [];
        this.top = this._items;
        this.length = 0;
    }

    push(data) {
        this._items.push(data);
        this.length++;
    }

    pop() {
        if (this._items.length === 0) {
            return null;
        }
        this.length--;
        return this._items.pop()
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        return this._items[this.length - 1]
    }


    toString() {
        return `top -> ${this._items.reverse().join(', ')}`;
    }
}

module.exports = Stack