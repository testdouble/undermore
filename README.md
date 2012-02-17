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

## _.uniqDeep(array)

`_.uniqDeep` is just like [_.uniq](http://documentcloud.github.com/underscore/#uniq), but performs comparisons with [_.isEqual](http://documentcloud.github.com/underscore/#isEqual) instead of ===. Unlike _.uniq, it doesn't take any arguments (yet).

Example:

``` javascript
var fruits = [{fruit:'apple'}, {fruit:'apple'}, {fruit: 'banana'}];
_(fruits).uniqDeep();
=> [{fruit:'apple'},{fruit:'banana'}]
```