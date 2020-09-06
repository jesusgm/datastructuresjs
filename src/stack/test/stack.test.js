const Stack = require("../stack");

describe("Stack", () => {
    describe("#push", () => {
        test("push the element at the top", () => {
            const stack = new Stack();
            stack.push(10);
            stack.push(20);

            expect(stack.length).toBe(2);
            expect(stack.peek()).toBe(20);
        })
    })

    describe("#pop", () => {
        describe("pop in a empty stack", () => {
            test("it should return null", () => {
                const stack = new Stack();

                const element = stack.pop();

                expect(element).toBeNull();
            })
        })

        describe("pop in a non empty stack", () => {
            test("it should return the element and remove it", () => {
                const stack = new Stack();
                stack.push(10);
                stack.push(20);
                stack.push(30);

                const element = stack.pop();

                expect(element).toBe(30);
                expect(stack.length).toBe(2)
            })
        })

    })

    describe("#isEmpty", () => {
        describe("with a empty stack", () => {
            test("it should return true", () => {
                const stack = new Stack();

                expect(stack.isEmpty()).toBe(true);
            })
        })

        describe("with a empty stack", () => {
            test("it should print the elements", () => {
                const stack = new Stack();
                stack.push(10);
                stack.push(20);
                stack.push(30);

                expect(stack.isEmpty()).toBe(false);
            })
        })

    })

    describe("#toString", () => {
        test("it should print the elements", () => {
            const stack = new Stack();
            stack.push(10);
            stack.push(20);
            stack.push(30);

            const element = stack.toString();

            expect(element).toBe("top -> 30, 20, 10");
        })
    })
})