# JS Data structures

<!-- [START badges] -->

![npm](https://img.shields.io/npm/v/@jesusgm/datastructurejs)
[![Build Status](https://travis-ci.org/jesusgm/datastructuresjs.svg?branch=master)](https://travis-ci.org/jesusgm/datastructuresjs)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jesusgm/datastructuresjs)
![GitHub Release Date](https://img.shields.io/github/release-date/jesusgm/datastructuresjs)
![NPM](https://img.shields.io/npm/l/@jesusgm/datastructurejs)

<!-- [END badges] -->

Package with some data structures implemented in JavaScript for academic purposes but it can be used for everyone that want

## Available data structures

-   SimpleLinkedList
-   DoubleLinkedList
-   Stack
-   Queue
-   Graph

## Installation

Install package executing these command:

        npm i @jesusgm/datastructurejs --save

## Usage

```javascript
const SimpleLinkedList = require('@jesusgm/datastructurejs').SingleLinkedList;

const ll = new SimpleLinkedList();

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
