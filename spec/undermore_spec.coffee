describe "Undermore.js", ->
  describe "_.withoutProperties", ->
    Given -> @data = a: 0, b: "foo"
    When -> @result = _(@data).withoutProperties (v,k) -> k == 'b'
    Then -> expect(@result).toEqual(a:0)

  describe "_.uniqDeep", ->
    Given -> @items = [{a:'b'},{a:'b'},{a:'c'},{a:'c'},{a:'c'}]
    When -> @result = _(@items).uniqDeep()
    Then -> expect(@result).toEqual([{a:'b'}, {a:'c'}])
