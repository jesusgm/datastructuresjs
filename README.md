# JS Data structures

<!-- [START badges] -->

![npm](https://img.shields.io/npm/v/@jesusgm/datastructurejs)
[![Build Status](https://travis-ci.org/jesusgm/js-data-structures.svg?branch=master)](https://travis-ci.org/jesusgm/js-data-structures)

<!-- [END badges] -->

Package with some data structures implemented in JavaScript for academic purposes but it can be used for everyone that want

## Available data structures

- SimpleLinkedList

## Installation

Install package executing these command:

        npm i @jesusgm/datastructurejs --save

## Usage

```javascript
const dsjs = require("@jesusgm/datastructurejs");

const ll = new dsjs.SimpleLinkedList();

ll.appendHead(1);
ll.appendHead(2);
ll.appendHead(3);

console.log(ll.toString());
```

Returns

```
3 -> 2 -> 1 -> null
```

## License

MIT
