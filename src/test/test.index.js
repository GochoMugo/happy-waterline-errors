// npm-installed modules
import should from "should";


// own modules
import happy from "../lib/index";


describe("happy", function() {
  it("is an exported function", function() {
    should(happy).be.a.Function();
  });

  it("allows errors without .toJSON function", function() {
    const error = {};
    should.doesNotThrow(function() {
      happy(error);
    });
  });
});
