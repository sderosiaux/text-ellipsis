# text-ellipsis [![Build Status](https://travis-ci.org/chtefi/text-ellipsis.svg)](https://travis-ci.org/chtefi/text-ellipsis)
> Cut off a string if too long

## Why

You always want to cut off long strings.

## Install

```shell
$ npm install --save text-ellipsis
```

## Usage

```js
var ellipsis = require('text-ellipsis');

var short = ellipsis('a very long text', 10);
console.log(short);
// "a very ..."

var short = ellipsis('a very long text', 10, { side: 'start' });
console.log(short);
// "...ng text"

var short = ellipsis('a very long text', 10, { ellipsis: ' END' });
console.log(short);
// "a very END"
```

