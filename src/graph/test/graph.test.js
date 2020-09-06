const Graph = require("../graph");
const Node = require("../graph-node");
const Edge = require("../edge");

describe("Graph", () => {
    //addNode
    describe("#addNode", () => {
        test("adds a node to graph", () => {
            const g = new Graph();

            const newNode = g.addNode(10);

            expect(newNode.value).toBe(10);
            expect(newNode.id).not.toBe(undefined);
            expect(g.contains(10)).toBe(true);
        });
    });

    //removeNode
    describe("#removeNode", () => {
        describe("if the node not exists in graph", () => {
            test("it should return false", () => {
                const g = new Graph();
                const n1 = g.addNode(10);
                const n2 = g.addNode(20);

                const otherNode = new Node(30);

                const result = g.removeNode(otherNode.id);

                expect(result).toBe(false);
                expect(g.contains(otherNode.id)).toBe(false);
            });

        });
        describe("if node not exists", () => {
            describe("if node exists", () => {
                test("it should remove the node and her edges", () => {
                    const g = new Graph();
                    const n1 = g.addNode(10);
                    const n2 = g.addNode(20);
                    const e = g.addEdge(n1.id, n2.id);

                    const result = g.removeNode(n1.id);

                    expect(result).toBe(true);
                    expect(g.contains(n1.id)).toBe(false);
                    expect(g.hasEdge(e.from, e.to)).toBe(false);
                });
            });
        });
    });

    //addEdge
    describe("#addEdge", () => {
        test("adds a edge between two nodes", () => {
            const g = new Graph();
            const n1 = g.addNode(10);
            const n2 = g.addNode(20);
            const e = g.addEdge(n1.id, n2.id);

            expect(e.id).not.toBe(undefined);
            expect(g.hasEdge(n1.id, n2.id)).toBe(true);
        });
    });

    //removeEdge
    describe("#removeEdge", () => {
        describe("remove a non existing edge", () => {
            test("it should returns false", () => {
                const g = new Graph();
                const n1 = g.addNode(10);
                const n2 = g.addNode(20);

                g.addEdge(n1.id, n2.id);

                const result = g.removeEdge(n2.id, n1.id);

                expect(result).toBe(false);
            });
        });

        describe("remove an existing edge", () => {
            test("it should remove the edge and return true", () => {
                const g = new Graph();
                const n1 = g.addNode(10);
                const n2 = g.addNode(20);

                g.addEdge(n1.id, n2.id);

                const result = g.removeEdge(n1.id, n2.id);

                expect(result).toBe(true);
                expect(g.hasEdge(n1.id, n2.id)).toBe(false);
            });
        });
    });

    //contains
    describe("#contains", () => {
        test("check if graph contain a value", () => {
            const g = new Graph();
            g.addNode(10);
            g.addNode(20);
            g.addNode(30);

            expect(g.contains(10)).toBe(true);
            expect(g.contains(40)).toBe(false);
        });
    });

    //hasEdge
    describe("#hasEdge", () => {
        test("check if graph contain a edge", () => {
            const g = new Graph();
            const n1 = g.addNode(10);
            const n2 = g.addNode(20);
            const n3 = g.addNode(30);
            g.addEdge(n1.id, n2.id);
            g.addEdge(n2.id, n3.id);

            expect(g.hasEdge(n1.id, n2.id)).toBe(true);
            expect(g.hasEdge(n2.id, n3.id)).toBe(true);
            expect(g.hasEdge(n2.id, n1.id)).toBe(false);
        });
    });

})