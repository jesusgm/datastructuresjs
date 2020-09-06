const Node = require("./graph-node");
const Edge = require("./edge");

class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    //addNode:  add vertices to graphs
    addNode(value) {
        const newNode = new Node(value);
        this.nodes.push(newNode);
        return newNode;
    }

    //removeNode:  removes vertices to graphs
    removeNode(nodeId) {
        const nodeToRemove = this.nodes.find(node => node.id === nodeId);
        if (!nodeToRemove) {
            return false;
        } else {
            this.edges = this.edges.filter(edge => edge.from !== nodeToRemove.id && edge.to !== nodeToRemove.to);
            this.nodes = this.nodes.filter(node => node.id !== nodeId);
            return true;
        }
    }

    //addEdge:  adds connections or paths between vertices in graphs
    addEdge(from, to) {
        const newEdge = new Edge(from, to);
        this.edges.push(newEdge);
        return newEdge;
    }

    //removeEdge:  removes connection or paths between vertices in graphs
    removeEdge(from, to) {
        if (this.hasEdge(from, to)) {
            this.edges = this.edges.filter(edge => edge.from !== from || edge.to !== to);
            return true;
        } else {
            return false;
        }

    }

    //contains:  check if a graph contains a certain value
    contains(value) {
        return this.nodes.some(node => node.value === value);
    }

    //hasEdge:  checks if a connection or path exists between any two vertices in a graph
    hasEdge(from, to) {
        return this.edges.some(edge => edge.from === from && edge.to === to);
    }
}

module.exports = Graph;