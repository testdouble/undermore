###
Undermore.js @@VERSION@@
some extensions to Underscore.js

Underscore: http://documentcloud.github.com/underscore/
Undermore: https://github.com/testdouble/undermore

###
_.mixin
  withoutProperties: (object,failTest) ->
    newObj = _(object).clone()
    _(object).each (val,key) ->
      delete newObj[key] if failTest(val,key) == true
    newObj

  uniqDeep: (collection) ->
    _(collection).chain().flatten().map( (item,i,arr) ->
      alreadyExists = _(arr).chain().first(i).any((previousItem) ->
        _(item).isEqual(previousItem)
      ).value()
      if alreadyExists then undefined else item
    ).compact().value()
