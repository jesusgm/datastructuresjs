const utils = require("../utils");

class GraphNode {
    constructor(value) {
        this.id = utils.getId();
        this.value = value;
    }
}

module.exports = GraphNode;