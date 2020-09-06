const utils = require("../utils");

class Edge {
    constructor(from, to) {
        this.id = utils.getId();
        this.from = from;
        this.to = to;
    }
}

module.exports = Edge;