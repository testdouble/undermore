# Undermore.js

[![Build Status](https://secure.travis-ci.org/testdouble/undermore.png)](http://travis-ci.org/testdouble/undermore)

Undermore.js is an [Underscore](http://documentcloud.github.com/underscore/) extension that adds a few methods to mixin.

**[Download the latest here.](https://raw.github.com/testdouble/undermore/master/dist/undermore.js)**

New methods:

## _.withoutProperties(object, iterator)

`_.withoutProperties` performs a shallow clone of the passed `object`. It will invoke `iterator` for each of `object`'s properties, and will delete properties for which `iterator` returns true.

Example:

``` javascript
var person = { name: "Ted", email: "ted@veridian.com", company_id: 182 };
_(person).withoutProperties(function(value, key) {
  return key.indexOf("_id") !== -1;
});
=> {name: "Ted", email: "ted@veridian.com"}
```

## _.uniqual(array)

`_.uniqual` is mostly like [_.uniq](http://documentcloud.github.com/underscore/#uniq), but performs comparisons with [_.isEqual](http://documentcloud.github.com/underscore/#isEqual) instead of ===.

Example:

``` javascript
var fruits = [{fruit:'apple'}, {fruit:'apple'}, {fruit: 'banana'}];
_(fruits).uniqual();
=> [{fruit:'apple'},{fruit:'banana'}]
```