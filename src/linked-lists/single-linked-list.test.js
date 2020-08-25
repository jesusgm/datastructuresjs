const SingleLinkedList = require("./single-linked-list")
const SingleNode = require("../nodes/single-node")

describe("SingleLinkedList", () => {
    describe("#appendAtHead", () => {
        test("it add the element at begining of the list", () => {
            const sll = new SingleLinkedList();

            sll.insertAtHead(10)
            const oldHead = sll.head
            sll.insertAtHead(20)

            expect(sll.head.value).toBe(20)
            expect(sll.head.next).toBe(oldHead)
            expect(sll.length).toBe(2)

        })
    })

    describe("#getByIndex", () => {
        describe("width negative index", () => {
            test("it returns null", () => {
                const sll = new SingleLinkedList();
                sll.insertAtHead(10)
                sll.insertAtHead(20)

                expect(sll.getByIndex(-5)).toBeNull()
            })
        })

        describe("width index greater then linked list length", () => {
            test("it returns null", () => {
                const sll = new SingleLinkedList();
                sll.insertAtHead(10)
                sll.insertAtHead(20)

                expect(sll.getByIndex(5)).toBeNull()
            })
        })

        describe("width index 0", () => {
            test("it returns the head", () => {
                const sll = new SingleLinkedList();
                sll.insertAtHead(10)
                sll.insertAtHead(20)

                expect(sll.getByIndex(0).value).toBe(20)
            })
        })

        describe("width index in de middle", () => {
            test("it returns the element at index", () => {
                const sll = new SingleLinkedList();
                sll.insertAtHead(10)
                sll.insertAtHead(20)
                sll.insertAtHead(30)
                sll.insertAtHead(40)

                expect(sll.getByIndex(2).value).toBe(30)
            })
        })
    })

    describe("#insertAtIndex", () => {
        describe("width negative index", () => {
            test("it returns null", () => {
                const sll = new SingleLinkedList();
                sll.insertAtHead(10)
                sll.insertAtHead(20)

                sll.insertAtIndex(-1, 30)

                expect(sll.length).toBe(2)
            })
        })

        describe("width index greater then linked list length", () => {
            test("it returns null", () => {
                const sll = new SingleLinkedList();
                sll.insertAtHead(10)
                sll.insertAtHead(20)

                sll.insertAtIndex(5, 30)

                expect(sll.length).toBe(2)
            })
        })

        describe("width index 0", () => {
            test("it insert at head", () => {
                const sll = new SingleLinkedList();
                sll.insertAtHead(10)
                sll.insertAtHead(20)

                sll.insertAtIndex(0, 30)

                expect(sll.getByIndex(0).value).toBe(30)
                expect(sll.length).toBe(3)
            })
        })

        describe("width index in de middle", () => {
            test("it insert the element at index", () => {
                const sll = new SingleLinkedList();
                sll.insertAtHead(10)
                sll.insertAtHead(20)
                sll.insertAtHead(30)

                sll.insertAtIndex(1, 30)

                expect(sll.getByIndex(1).value).toBe(30)
                expect(sll.length).toBe(4)
            })
        })
    })

    describe('#removeHead', () => {
        test('removes the head', () => {
            const sll = new SingleLinkedList();
            sll.insertAtHead(10)
            sll.insertAtHead(20)
            sll.insertAtHead(30)

            sll.removeHead()

            expect(sll.head.value).toBe(20)
            expect(sll.length).toBe(2)
        })
    })

    describe('#removeAtIndex', () => {
        describe('with index less than 0', () => {
            test('it does not remove anything', () => {
                const sll = new SingleLinkedList();
                sll.insertAtHead(10)
                sll.insertAtHead(20)
                sll.insertAtHead(30)

                sll.removeAtIndex(-1)

                expect(sll.length).toBe(3)
            })
        })

        describe('with index greater than list length', () => {
            test('it does not remove anything', () => {
                const sll = new SingleLinkedList();
                sll.insertAtHead(10)
                sll.insertAtHead(20)
                sll.insertAtHead(30)

                sll.removeAtIndex(-1)

                expect(sll.length).toBe(3)
            })
        })

        describe('with index 0', () => {
            test('remove the head', () => {
                const sll = new SingleLinkedList();
                sll.insertAtHead(10)
                sll.insertAtHead(20)
                sll.insertAtHead(30)

                sll.removeAtIndex(0)

                expect(sll.head.value).toBe(20)
                expect(sll.head.next.value).toBe(10)
                expect(sll.length).toBe(2)
            })
        })

        describe('with index in the middle', () => {
            test('remove at the given index', () => {
                const sll = new SingleLinkedList();
                sll.insertAtHead(10);
                sll.insertAtHead(20);
                sll.insertAtHead(30);
                sll.insertAtHead(40);

                sll.removeAtIndex(2);

                const node = sll.getByIndex(1);

                expect(node.value).toBe(30);
                expect(node.next.value).toBe(10)
                expect(sll.length).toBe(3)
            })
        })
    })


    describe("#toString", () => {
        test("prints a list in a human readable format", () => {
            const sll = new SingleLinkedList();

            sll.insertAtHead(10)
            sll.insertAtHead(20)
            sll.insertAtHead(30)

            expect(sll.toString()).toBe("30 -> 20 -> 10 -> null")
        })
    })
})