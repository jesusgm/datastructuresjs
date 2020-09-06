const Queue = require("../queue");

describe("Queue", () => {
    describe("#push", () => {
        test("push the element at the top", () => {
            const queue = new Queue();
            queue.push(10);
            queue.push(20);

            expect(queue.length).toBe(2);
            expect(queue.peek()).toBe(10);
        })
    })

    describe("#pop", () => {
        describe("pop in a empty queue", () => {
            test("it should return null", () => {
                const queue = new Queue();
                const element = queue.pop();
                expect(element).toBeNull();
            })
        })
        describe("pop in a non empty queue", () => {
            test("it should return the element and remove it", () => {
                const queue = new Queue();
                queue.push(10);
                queue.push(20);
                queue.push(30);

                const element = queue.pop();

                expect(element).toBe(10);
                expect(queue.length).toBe(2)
            })
        })
    })

    describe("#isEmpty", () => {
        describe("with a empty queue", () => {
            test("it should return true", () => {
                const queue = new Queue();

                expect(queue.isEmpty()).toBe(true);
            })
        })

        describe("with a empty queue", () => {
            test("it should print the elements", () => {
                const queue = new Queue();
                queue.push(10);
                queue.push(20);
                queue.push(30);

                expect(queue.isEmpty()).toBe(false);
            })
        })

    })

    describe("#peek", () => {
        describe("width a empty queue", () => {
            test("it should return null", () => {
                const queue = new Queue();

                const element = queue.peek();

                expect(element).toBeNull();
            })
        })

        describe("width a non empty queue", () => {
            test("it should return the first element inserted", () => {
                const queue = new Queue();
                queue.push(10)
                queue.push(20)
                queue.push(30)

                const element = queue.peek();

                expect(element).toBe(10);
            })
        })
    })

    describe("#toString", () => {
        test("it should print the elements", () => {
            const queue = new Queue();
            queue.push(10);
            queue.push(20);
            queue.push(30);

            const element = queue.toString();

            expect(element).toBe("top -> 30, 20, 10");
        })
    })
})