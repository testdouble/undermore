
/*
Undermore.js 0.0.1
some extensions to Underscore.js

Underscore: http://documentcloud.github.com/underscore/
Undermore: https://github.com/testdouble/undermore
*/

(function() {

  _.mixin({
    withoutProperties: function(object, failTest) {
      var newObj;
      newObj = _(object).clone();
      _(object).each(function(val, key) {
        if (failTest(val, key) === true) return delete newObj[key];
      });
      return newObj;
    },
    uniqual: function(collection) {
      return _(collection).chain().flatten().map(function(item, i, arr) {
        var alreadyExists;
        alreadyExists = _(arr).chain().first(i).any(function(previousItem) {
          return _(item).isEqual(previousItem);
        }).value();
        if (alreadyExists) {
          return;
        } else {
          return item;
        }
      }).compact().value();
    }
  });

}).call(this);
