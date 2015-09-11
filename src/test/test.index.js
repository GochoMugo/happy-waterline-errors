// npm-installed modules
import should from "should";


// own modules
import happy from "../lib/index";


describe("happy", function() {
  it("is an exported function", function() {
    should(happy).be.a.Function();
  });
});
