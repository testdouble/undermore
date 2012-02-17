describe("Undermore", function() {
  describe("_.withoutProperties", function() {
    beforeEach(function() {
      var person = { name: "Ted", email: "ted@veridian.com", company_id: 182 };

      this.result = _(person).withoutProperties(function(value, key) {
        return key.indexOf("_id") !== -1;
      });
    });
    it("excludes the ids", function() {
      expect(this.result).toEqual({name: "Ted", email: "ted@veridian.com"});
    });
  });

  describe("_.uniqual", function() {
    beforeEach(function() {
      var fruits = [{fruit:'apple'}, {fruit:'apple'}, {fruit: 'banana'}];
      this.result = _(fruits).uniqual();
    });
    it("performs a deep-equals", function() {
      expect(this.result).toEqual([{fruit:'apple'},{fruit:'banana'}]);
    });
  });
});