# assertthat-type
a simple type assertion plugin for assertthat testing framework.

# Plug-in
```
const assert = require('assertthat');
require('assertthat-type')(assert);
```

## Number
Asserts that type of `actual` is Number.

```
assert.that(1).is.a.number();
assert.that(0).is.a.number();
assert.that(-1).is.a.number();
```

## String
Asserts that type of `actual` is String.

```
assert.that('').is.a.string();
assert.that('foobar').is.a.string();
```

## Array
Asserts that type of `actual` is Array.

```
assert.that([]).is.an.array();
assert.that([1, 2, 3]).is.an.array();
```
