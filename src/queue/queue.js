class Queue {
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
        const element = this._items[0]
        this._items.slice(1, this.length - 1)
        return element;
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if (this.length === 0) {
            return null;
        }

        return this._items[0]
    }


    toString() {
        return `top -> ${this._items.reverse().join(', ')}`;
    }
}

module.exports = Queue;