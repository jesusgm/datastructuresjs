const SingleLinkedList = require("../single-linked-list");

describe("SingleLinkedList", () => {
  describe("#appendAtHead", () => {
    test("it add the element at begining of the list", () => {
      const sll = SingleLinkedList.fromValues(10);

      const oldHead = sll.head;
      sll.insertAtHead(20);

      expect(sll.head.value).toBe(20);
      expect(sll.head.next).toBe(oldHead);
      expect(sll.length).toBe(2);
    });
  });

  describe("#getByIndex", () => {
    describe("width negative index", () => {
      test("it returns null", () => {
        const sll = SingleLinkedList.fromValues(10, 20);

        expect(sll.getByIndex(-5)).toBeNull();
      });
    });

    describe("width index greater then linked list length", () => {
      test("it returns null", () => {
        const sll = SingleLinkedList.fromValues(10, 20);

        expect(sll.getByIndex(5)).toBeNull();
      });
    });

    describe("width index 0", () => {
      test("it returns the head", () => {
        const sll = SingleLinkedList.fromValues(10, 20);

        expect(sll.getByIndex(0).value).toBe(10);
      });
    });

    describe("width index in de middle", () => {
      test("it returns the element at index", () => {
        const sll = SingleLinkedList.fromValues(10, 20, 30, 40);

        expect(sll.getByIndex(2).value).toBe(30);
      });
    });
  });

  describe("#insertAtIndex", () => {
    describe("width negative index", () => {
      test("it returns null", () => {
        const sll = SingleLinkedList.fromValues(10, 20);

        sll.insertAtIndex(-1, 30);

        expect(sll.length).toBe(2);
      });
    });

    describe("width index greater then linked list length", () => {
      test("it returns null", () => {
        const sll = SingleLinkedList.fromValues(10, 20);

        sll.insertAtIndex(5, 30);

        expect(sll.length).toBe(2);
      });
    });

    describe("width index 0", () => {
      test("it insert at head", () => {
        const sll = SingleLinkedList.fromValues(10, 20);

        sll.insertAtIndex(0, 30);

        expect(sll.getByIndex(0).value).toBe(30);
        expect(sll.length).toBe(3);
      });
    });

    describe("width index in de middle", () => {
      test("it insert the element at index", () => {
        const sll = SingleLinkedList.fromValues(10, 20, 30);

        sll.insertAtIndex(1, 30);

        expect(sll.getByIndex(1).value).toBe(30);
        expect(sll.length).toBe(4);
      });
    });
  });

  describe("#removeHead", () => {
    test("removes the head", () => {
      const sll = SingleLinkedList.fromValues(10, 20, 30);

      sll.removeHead();

      expect(sll.head.value).toBe(20);
      expect(sll.length).toBe(2);
    });
  });

  describe("#removeAtIndex", () => {
    describe("with index less than 0", () => {
      test("it does not remove anything", () => {
        const sll = SingleLinkedList.fromValues(10, 20, 30);

        sll.removeAtIndex(-1);

        expect(sll.length).toBe(3);
      });
    });

    describe("with index greater than list length", () => {
      test("it does not remove anything", () => {
        const sll = SingleLinkedList.fromValues(10, 20, 30);

        sll.removeAtIndex(-1);

        expect(sll.length).toBe(3);
      });
    });

    describe("with index 0", () => {
      test("remove the head", () => {
        const sll = SingleLinkedList.fromValues(10, 20, 30);

        sll.removeAtIndex(0);

        expect(sll.head.value).toBe(20);
        expect(sll.head.next.value).toBe(30);
        expect(sll.length).toBe(2);
      });
    });

    describe("with index in the middle", () => {
      test("remove at the given index", () => {
        const sll = SingleLinkedList.fromValues(10, 20, 30, 40);

        sll.removeAtIndex(2);

        const node = sll.getByIndex(1);

        expect(node.value).toBe(20);
        expect(node.next.value).toBe(40);
        expect(sll.length).toBe(3);
      });
    });
  });

  describe("#clear", () => {
    test("clears the list", () => {
      const sll = SingleLinkedList.fromValues(10, 20, 30, 40);

      sll.clear();

      expect(sll.head).toBeNull();
      expect(sll.length).toBe(0);
    });
  });

  describe("#getTail", () => {
    test("returns the las element", () => {
      const sll = SingleLinkedList.fromValues(10, 20, 30, 40);

      const tail = sll.getTail();

      expect(tail.value).toBe(40);
    });
  });

  describe("#concat", () => {
    test("concats the list with other pased as parameter", () => {
      const sll1 = new SingleLinkedList();
      const sll2 = new SingleLinkedList();
      sll1.insertAtHead(20);
      sll1.insertAtHead(10);
      sll2.insertAtHead(40);
      sll2.insertAtHead(30);

      sll1.concat(sll2);

      expect(sll1.length).toBe(4);
      expect(sll1.head.value).toBe(10);
      expect(sll1.getTail().value).toBe(40);
    });
  });

  describe("#pop", () => {
    test("removes and return the first element of the list", () => {
      const sll1 = new SingleLinkedList();
      sll1.insertAtHead(40);
      sll1.insertAtHead(30);
      sll1.insertAtHead(20);
      sll1.insertAtHead(10);

      const element = sll1.pop();

      expect(sll1.length).toBe(3);
      expect(element.value).toBe(10);
    });
  });

  describe("#fromValues", () => {
    test("creates a SingleLinkedList from a list of values pased", () => {
      const sll = SingleLinkedList.fromValues(10, 20, 30, 40);

      expect(sll.length).toBe(4);
      expect(sll.head.value).toBe(10);
      expect(sll.getTail().value).toBe(40);
    })
  })

  describe("#toString", () => {
    test("prints a list in a human readable format", () => {
      const sll = SingleLinkedList.fromValues(10, 20, 30);

      expect(sll.toString()).toBe("10 -> 20 -> 30 -> null");
    });
  });
});