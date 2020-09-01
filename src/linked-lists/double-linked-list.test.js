const DoubleLinkedList = require('./double-linked-list');

describe('DoubleLinkedList', () => {
    describe('#insertAtHead', () => {
        test('appends a item al the begining of the list', () => {
            const dll = new DoubleLinkedList();

            dll.insertAtHead(10);
            dll.insertAtHead(20);

            expect(dll.length).toBe(2);
            expect(dll.head.value).toBe(20);
        });
    });

    describe('#getByIndex', () => {
        describe('with negative index', () => {
            test('it should return null', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30);

                expect(dll.getByIndex(-5)).toBeNull();
            });
        });

        describe('with index greater than list length', () => {
            test('it should return null', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30);

                expect(dll.getByIndex(5)).toBeNull();
            });
        });

        describe('with index with value 0', () => {
            test('it should return the head', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30);

                expect(dll.getByIndex(0).value).toBe(10);
            });
        });

        describe('with index in the middle', () => {
            test('it should return null', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30, 40, 50);

                expect(dll.getByIndex(2).value).toBe(30);
                expect(dll.getByIndex(3).value).toBe(40);
            });
        });
    });

    describe('#insertAtIndex', () => {
        describe('width negative index', () => {
            test('should return null', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30);

                const result = dll.insertAtIndex(-5, 40);

                expect(dll.length).toBe(3);
                expect(result).toBeNull();
            });
        });
        describe('width index greatter than list length', () => {
            test('should return null', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30);

                const result = dll.insertAtIndex(5, 40);

                expect(dll.length).toBe(3);
                expect(result).toBeNull();
            });
        });
        describe('width index equal to 0', () => {
            test('should return null', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30);

                dll.insertAtIndex(0, 40);

                expect(dll.length).toBe(4);
            });
        });
        describe('width index in the middle', () => {
            test('insert the value at the index', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30);

                dll.insertAtIndex(1, 40);

                expect(dll.length).toBe(4);
                expect(dll.getByIndex(1).value).toBe(40);
                expect(dll.getByIndex(1).prev.value).toBe(10);
                expect(dll.getByIndex(1).next.value).toBe(20);
                expect(dll.getByIndex(0).next.value).toBe(40);
                expect(dll.getByIndex(2).prev.value).toBe(40);
            });
        });
    });

    describe('#removeHead', () => {
        test('removes the first element', () => {
            const dll = DoubleLinkedList.fromValues(10, 20, 30);

            dll.removeHead();

            expect(dll.head.value).toBe(20);
            expect(dll.head.prev).toBeNull();
            expect(dll.length).toBe(2);
        });
    });

    describe('#removeAtIndex', () => {
        describe('with negative index', () => {
            test('it should return null', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30, 40);

                const returns = dll.removeAtIndex(-2);

                expect(dll.length).toBe(4);
                expect(returns).toBeNull()

            });
        });

        describe('with index greatter than list length', () => {
            test('it should return null', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30, 40);

                const returns = dll.removeAtIndex(10);

                expect(dll.length).toBe(4);
                expect(returns).toBeNull()

            });
        });

        describe('with index equal to 0', () => {
            test('it should remove the head', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30, 40);

                dll.removeAtIndex(0);

                expect(dll.length).toBe(3);
                expect(dll.getByIndex(0).value).toBe(20);
                expect(dll.getByIndex(0).prev).toBeNull();
            });
        });

        describe('with index between 0 and list length', () => {
            test('it should remove the item at index', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30, 40);

                dll.removeAtIndex(1);

                expect(dll.length).toBe(3);
                expect(dll.getByIndex(1).value).toBe(30);
                expect(dll.getByIndex(1).prev.value).toBe(10);
                expect(dll.getByIndex(1).next.value).toBe(40);
                expect(dll.getByIndex(0).next.value).toBe(30);
                expect(dll.getByIndex(2).prev.value).toBe(30);
            });
        });
    });

    describe('#getTail', () => {
        describe('with a empty list', () => {
            const dll = new DoubleLinkedList();

            const element = dll.getTail();

            expect(element).toBe(null);
        });

        describe('with a non empty list', () => {
            test('returns the last item in the list', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30, 40);

                const element = dll.getTail();

                expect(element.value).toBe(40);
            });
        });
    });

    describe('#pop', () => {
        describe('with a empty list', () => {
            const dll = new DoubleLinkedList();

            const element = dll.pop();

            expect(element).toBe(null);
        });

        describe('with a non empty list', () => {
            test('returns the first item in the list', () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30, 40);

                const element = dll.pop();

                expect(element.value).toBe(10);
            });
        });
    });

    describe('#concat', () => {
        describe('concat a two empty lists', () => {
            test("it should return an empty list", () => {
                const dll = new DoubleLinkedList();
                const dll2 = DoubleLinkedList.fromValues(10, 20, 30);

                dll.concat(dll2);

                expect(dll.length).toBe(3);
            })
        });

        describe('concat a non empty list with an empty list', () => {
            test("it should return a list like first list", () => {
                const dll = DoubleLinkedList.fromValues(10, 20, 30);
                const dll2 = new DoubleLinkedList();

                dll.concat(dll2);

                expect(dll.length).toBe(3);
            })
        });

        describe('concat a empty list with a non empty list', () => {
            test("it should return a list like the second list", () => {
                const dll = new DoubleLinkedList();
                const dll2 = DoubleLinkedList.fromValues(10, 20, 30);

                dll.concat(dll2);

                expect(dll.length).toBe(3);
            })
        });


        describe('with a non empty list', () => {
            test('concats the second list at end', () => {
                const dll = DoubleLinkedList.fromValues(10, 20);
                const dll2 = DoubleLinkedList.fromValues(30, 40);

                dll.concat(dll2);

                expect(dll.length).toBe(4);
                expect(dll.getTail().value).toBe(40);
                expect(dll.getByIndex(0).value).toBe(10);
                expect(dll.getByIndex(1).value).toBe(20);
                expect(dll.getByIndex(2).value).toBe(30);
                expect(dll.getByIndex(3).value).toBe(40);
                expect(dll.getByIndex(1).next.value).toBe(30);
                expect(dll.getByIndex(2).prev.value).toBe(20);
            });
        });
    });

    describe("#clear", () => {
        test("clears the list", () => {
            const dll = DoubleLinkedList.fromValues(10, 20, 30, 40);

            dll.clear();

            expect(dll.head).toBeNull();
            expect(dll.length).toBe(0);
        });
    });

    describe("#toString", () => {
        test("prints a list", () => {
            const dll = DoubleLinkedList.fromValues(10, 20, 30, 40);

            const result = dll.toString();

            expect(result).toBe("null <- 10 ->  <- 20 ->  <- 30 ->  <- 40 -> null");
        })
    })
});