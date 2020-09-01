const {
    SingleLinkedList,
    DoubleLinkedList,
    Queue
} = require('./index');


const queue = new Queue();

queue.push(10)
queue.push(20)
queue.push(30)

console.log(queue.toString());